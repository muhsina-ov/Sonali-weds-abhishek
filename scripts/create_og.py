import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_image():
    W, H = 1200, 630
    
    # Base background: luxurious warm parchment
    base = Image.new("RGBA", (W, H), (249, 246, 240, 255))
    
    # Load jaali texture for subtle cultural watermark
    jaali_path = "src/assets/jaali.jpg"
    if os.path.exists(jaali_path):
        jaali = Image.open(jaali_path).convert("RGBA")
        jaali = jaali.resize((W, H))
        # Reduce opacity to very faint watermark
        jaali_mask = jaali.split()[0].point(lambda p: int(p * 0.08))
        jaali_tint = Image.new("RGBA", (W, H), (197, 155, 39, 255))
        base.paste(jaali_tint, (0, 0), jaali_mask)

    draw = ImageDraw.Draw(base)

    # Couple portrait in right side arch
    couple_path = "src/assets/hero-arch.jpg"
    if os.path.exists(couple_path):
        couple_img = Image.open(couple_path).convert("RGBA")
        
        # Arch dimensions
        arch_w = 460
        arch_h = 550
        arch_x = 690
        arch_y = 40
        
        # Crop couple nicely centered
        crop_box = (140, 320, 884, 1220)
        couple_cropped = couple_img.crop(crop_box).resize((arch_w, arch_h), Image.Resampling.LANCZOS)
        
        # Create an ornate arch mask
        mask = Image.new("L", (arch_w, arch_h), 0)
        mask_draw = ImageDraw.Draw(mask)
        
        radius = arch_w // 2
        mask_draw.pieslice([0, 0, arch_w, arch_w], 180, 360, fill=255)
        mask_draw.rectangle([0, radius, arch_w, arch_h - 20], fill=255)
        mask_draw.rounded_rectangle([0, arch_h - 50, arch_w, arch_h], radius=20, fill=255)
        
        # Shadow for arch
        shadow_mask = mask.filter(ImageFilter.GaussianBlur(16))
        shadow = Image.new("RGBA", (arch_w + 40, arch_h + 40), (0, 0, 0, 0))
        shadow.paste(Image.new("RGBA", (arch_w, arch_h), (25, 45, 35, 110)), (20, 24), shadow_mask)
        base.paste(shadow, (arch_x - 20, arch_y - 20), shadow)
        
        # Paste cropped couple
        base.paste(couple_cropped, (arch_x, arch_y), mask)
        
        # Golden arch outline border
        gold_color = (197, 155, 39, 255) # #c59b27
        gold_inner = (220, 185, 85, 255)
        
        for offset, color, width in [(0, gold_color, 4), (5, gold_inner, 2), (-4, (251, 248, 242, 200), 1)]:
            r = radius - offset
            x0 = arch_x + offset
            y0 = arch_y + offset
            x1 = arch_x + arch_w - offset
            y1 = arch_y + arch_h - offset
            draw.arc([x0, y0, x1, y0 + 2*r], 180, 360, fill=color, width=width)
            draw.line([x0, y0 + r, x0, y1 - 20], fill=color, width=width)
            draw.line([x1, y0 + r, x1, y1 - 20], fill=color, width=width)
            draw.line([x0 + 20, y1, x1 - 20, y1], fill=color, width=width)
            draw.arc([x0, y1 - 40, x0 + 40, y1], 90, 180, fill=color, width=width)
            draw.arc([x1 - 40, y1 - 40, x1, y1], 0, 90, fill=color, width=width)

    # Load decorative lotus
    lotus_path = "src/assets/lotus.png"
    if os.path.exists(lotus_path):
        lotus = Image.open(lotus_path).convert("RGBA")
        lotus_sm = lotus.resize((85, 85), Image.Resampling.LANCZOS)
        base.paste(lotus_sm, (665, 515), lotus_sm)
        lotus_r = lotus_sm.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
        base.paste(lotus_r, (1110, 515), lotus_r)

    # Double Outer Gold Border
    b_gold = (197, 155, 39, 220)
    draw.rectangle([20, 20, W - 20, H - 20], outline=b_gold, width=2)
    draw.rectangle([28, 28, W - 28, H - 28], outline=(197, 155, 39, 130), width=1)
    
    # Corner ornaments
    for cx, cy in [(28, 28), (W - 28, 28), (28, H - 28), (W - 28, H - 28)]:
        draw.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=b_gold)

    # Fonts
    font_serif = "C:/Windows/Fonts/georgia.ttf"
    font_serif_b = "C:/Windows/Fonts/georgiab.ttf"
    font_serif_i = "C:/Windows/Fonts/georgiai.ttf"
    font_dev = "C:/Windows/Fonts/Nirmala.ttc"
    
    try:
        f_shloka = ImageFont.truetype(font_dev, 22)
    except:
        f_shloka = ImageFont.truetype(font_serif, 20)
        
    f_kicker = ImageFont.truetype(font_serif, 16)
    f_names = ImageFont.truetype(font_serif_b, 56)
    f_weds = ImageFont.truetype(font_serif_i, 32)
    f_date = ImageFont.truetype(font_serif_b, 24)
    f_venue = ImageFont.truetype(font_serif, 17)
    f_bless = ImageFont.truetype(font_serif_i, 15)

    gold = (180, 135, 25, 255)
    pine = (30, 56, 43, 255)
    ink = (65, 55, 50, 240)
    
    cx_left = 370
    
    # 1. Auspicious Shloka
    shloka_text = "॥ श्री गणेशाय नमः ॥"
    sw = draw.textlength(shloka_text, font=f_shloka)
    draw.text((cx_left - sw/2, 65), shloka_text, font=f_shloka, fill=gold)
    
    draw.line([cx_left - 60, 105, cx_left + 60, 105], fill=(197, 155, 39, 150), width=1)
    draw.ellipse([cx_left - 3, 102, cx_left + 3, 108], fill=gold)

    # 2. Kicker
    kicker_text = "WEDDING INVITATION"
    kw = draw.textlength(kicker_text, font=f_kicker)
    draw.text((cx_left - kw/2, 125), kicker_text, font=f_kicker, fill=(120, 100, 75, 255))

    # 3. Bride Name
    b_text = "Sonali"
    bw = draw.textlength(b_text, font=f_names)
    draw.text((cx_left - bw/2, 160), b_text, font=f_names, fill=pine)
    
    # "weds"
    w_text = "weds"
    ww = draw.textlength(w_text, font=f_weds)
    draw.text((cx_left - ww/2, 235), w_text, font=f_weds, fill=gold)

    # 4. Groom Name
    g_text = "Abhishek"
    gw = draw.textlength(g_text, font=f_names)
    draw.text((cx_left - gw/2, 280), g_text, font=f_names, fill=pine)

    draw.line([cx_left - 130, 368, cx_left + 130, 368], fill=(197, 155, 39, 180), width=1)
    draw.polygon([(cx_left, 364), (cx_left + 5, 368), (cx_left, 372), (cx_left - 5, 368)], fill=gold)

    # 5. Auspicious Date
    date_text = "Tuesday, 3rd November 2026"
    dw = draw.textlength(date_text, font=f_date)
    pad_x = 24
    badge_x0 = cx_left - dw/2 - pad_x
    badge_y0 = 390
    badge_x1 = cx_left + dw/2 + pad_x
    badge_y1 = badge_y0 + 44
    draw.rounded_rectangle([badge_x0, badge_y0, badge_x1, badge_y1], radius=22, fill=(240, 233, 218, 255), outline=gold, width=1)
    draw.text((cx_left - dw/2, badge_y0 + 7), date_text, font=f_date, fill=pine)

    # 6. Venue
    v1_text = "At Residence • Vill. Kuranwala, P.O. Mandhala"
    v1w = draw.textlength(v1_text, font=f_venue)
    draw.text((cx_left - v1w/2, 455), v1_text, font=f_venue, fill=ink)

    v2_text = "Tehsil Baddi, Distt. Solan, Himachal Pradesh"
    v2w = draw.textlength(v2_text, font=f_venue)
    draw.text((cx_left - v2w/2, 485), v2_text, font=f_venue, fill=ink)

    # 7. Subtle note at bottom
    bless_text = "Cordially invite you to celebrate their auspicious union"
    blw = draw.textlength(bless_text, font=f_bless)
    draw.text((cx_left - blw/2, 535), bless_text, font=f_bless, fill=(130, 115, 95, 230))

    # Save to public/og-image.jpg
    out_rgb = base.convert("RGB")
    out_rgb.save("public/og-image.jpg", quality=95)
    print("Successfully generated public/og-image.jpg (1200x630)")

if __name__ == "__main__":
    create_og_image()
