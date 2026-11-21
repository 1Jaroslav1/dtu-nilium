# smoke_test

Generated firmware for **Atech 14-Port Board** (`14port`).

## Modules

- **ST7735 TFT Color Display (160x80)** (`st7735_tft`) as `st7735_tft` on `port_1, port_2`
- **Button** (`button`) as `button` on `port_7`

## Build & flash

This folder is generated. Change `project.yaml` one level up and run, from there:

```bash
atech build .
atech upload .
```

It is also a plain PlatformIO project (`pio run`, `pio run -t upload`), but
anything edited here is overwritten by the next `atech build`.
