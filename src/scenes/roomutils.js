export function setBackgrounfColor(k, hexColorCode) {
    k.add([
        k.rect(k.width(), k.height()),
        k.color(k.color.fromHex(hexColorCode)),
        k.fixed(),
    ]);
}