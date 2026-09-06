"""Generate OG image (1200x630) for 立霖國文 brand site.

Run with:
    uv tool run --from pillow -- python scripts/generate_og_image.py
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUT = Path(__file__).parent.parent / "public" / "images" / "og-image.png"

W, H = 1200, 630

# Brand colors
NAVY_DEEP = (10, 26, 53)
NAVY_MID = (13, 35, 65)
NAVY_DARK_LEFT = (7, 20, 40)
GOLD = (251, 191, 36)
GOLD_LIGHT = (252, 211, 77)
GOLD_DARK = (245, 158, 11)
WHITE = (255, 255, 255)
SLATE_300 = (203, 213, 225)
SLATE_400 = (148, 163, 184)


def gradient_background(im: Image.Image) -> None:
    px = im.load()
    for y in range(H):
        for x in range(W):
            t = (x / W + y / H) / 2
            r = int(NAVY_DEEP[0] + (NAVY_MID[0] - NAVY_DEEP[0]) * t)
            g = int(NAVY_DEEP[1] + (NAVY_MID[1] - NAVY_DEEP[1]) * t)
            b = int(NAVY_DEEP[2] + (NAVY_MID[2] - NAVY_DEEP[2]) * t)
            px[x, y] = (r, g, b)


def radial_glow(im: Image.Image, cx: int, cy: int, radius: int, color: tuple, alpha: float) -> None:
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    steps = 40
    for i in range(steps, 0, -1):
        a = int(alpha * 255 * (i / steps) ** 2)
        r = int(radius * (i / steps))
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=color + (a,))
    overlay = overlay.filter(ImageFilter.GaussianBlur(radius=20))
    im.alpha_composite(overlay)


def find_chinese_font(size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        r"C:\Windows\Fonts\msjh.ttc",          # 微軟正黑體
        r"C:\Windows\Fonts\msjhbd.ttc",        # 微軟正黑體 Bold
        r"C:\Windows\Fonts\NotoSansTC-Bold.otf",
        r"C:\Windows\Fonts\NotoSerifTC-Bold.otf",
        r"C:\Windows\Fonts\mingliu.ttc",
    ]
    for path in candidates:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    return ImageFont.load_default()


def draw_armillary(im: Image.Image, cx: int, cy: int) -> None:
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    bbox = (cx - 220, cy - 220, cx + 220, cy + 220)
    draw.ellipse(bbox, outline=GOLD + (140,), width=2)

    bbox2 = (cx - 200, cy - 88, cx + 200, cy + 88)
    rotated = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    rotated_draw = ImageDraw.Draw(rotated)
    rotated_draw.ellipse(bbox2, outline=GOLD + (180,), width=3)
    rotated = rotated.rotate(-25, center=(cx, cy), resample=Image.BICUBIC)
    overlay = Image.alpha_composite(overlay, rotated)

    rotated2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    rotated2_draw = ImageDraw.Draw(rotated2)
    rotated2_draw.ellipse((cx - 170, cy - 70, cx + 170, cy + 70), outline=GOLD_LIGHT + (210,), width=3)
    rotated2 = rotated2.rotate(40, center=(cx, cy), resample=Image.BICUBIC)
    overlay = Image.alpha_composite(overlay, rotated2)

    for px_, py_, r in [(cx - 130, cy - 140, 4), (cx + 110, cy - 90, 3), (cx + 130, cy + 130, 3), (cx - 90, cy + 150, 4)]:
        d = ImageDraw.Draw(overlay)
        d.ellipse((px_ - r, py_ - r, px_ + r, py_ + r), fill=GOLD_LIGHT + (230,))

    overlay_blur = overlay.filter(ImageFilter.GaussianBlur(radius=1))
    im.alpha_composite(overlay_blur)


def main() -> None:
    im = Image.new("RGBA", (W, H), NAVY_DEEP)
    rgb = im.copy()
    rgb_px = rgb.load()
    for y in range(H):
        ratio = y / H
        for x in range(W):
            xr = x / W
            r = int(NAVY_DEEP[0] + (NAVY_MID[0] - NAVY_DEEP[0]) * (xr * 0.6 + ratio * 0.4))
            g = int(NAVY_DEEP[1] + (NAVY_MID[1] - NAVY_DEEP[1]) * (xr * 0.6 + ratio * 0.4))
            b = int(NAVY_DEEP[2] + (NAVY_DARK_LEFT[2] - NAVY_DEEP[2]) * ((1 - xr) * 0.5))
            rgb_px[x, y] = (max(7, r), max(20, g), max(28, b), 255)
    im = rgb

    radial_glow(im, 900, 200, 380, GOLD, 0.18)
    radial_glow(im, 200, 500, 320, (59, 130, 246), 0.12)

    draw_armillary(im, 900, 315)

    draw = ImageDraw.Draw(im)
    label_font = find_chinese_font(22)
    draw.text((80, 100), "LILIN GUOWEN  ·  立霖國文", font=label_font, fill=GOLD)

    title_font = find_chinese_font(78)
    draw.text((80, 200), "不只提升分數", font=title_font, fill=WHITE)

    gold_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gold_draw = ImageDraw.Draw(gold_layer)
    gold_draw.text((80, 300), "更引導人生方向", font=title_font, fill=GOLD)
    im.alpha_composite(gold_layer)

    draw = ImageDraw.Draw(im)
    draw.line((80, 410, 200, 410), fill=GOLD, width=3)

    quote_font = find_chinese_font(28)
    draw.text((80, 432), "人生沒有 Google，但有經典可循。", font=quote_font, fill=SLATE_300)

    sub_font = find_chinese_font(22)
    draw.text((80, 480), "會考 · 學測 · 國文素養教學  ·  新竹／全台線上", font=sub_font, fill=SLATE_400)

    btn_font = find_chinese_font(22)
    btn_x, btn_y, btn_w, btn_h = 80, 540, 200, 56
    draw.rounded_rectangle((btn_x, btn_y, btn_x + btn_w, btn_y + btn_h), radius=28, fill=GOLD)
    bbox = draw.textbbox((0, 0), "立即免費診斷", font=btn_font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    draw.text((btn_x + (btn_w - text_w) / 2, btn_y + (btn_h - text_h) / 2 - 4), "立即免費診斷", font=btn_font, fill=NAVY_DEEP)

    tag_font = find_chinese_font(20)
    draw.text((300, 558), "素養教學領航者", font=tag_font, fill=SLATE_400)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    im.convert("RGB").save(OUT, "PNG", optimize=True)
    print(f"OG image saved: {OUT}")


if __name__ == "__main__":
    main()
