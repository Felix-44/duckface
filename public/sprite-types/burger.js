spriteTypes.burger = new SpriteType({
    id: "burger",
    name: "Burger",
    shape: SHAPES.BOX,
    resizable: true,
    collectable: true,
    collisionBox: { t: 0.3, r: 1.0, b: 1.0, l: 0.0, },
    collidesWithObstacles: true,
    spriteProps: {
        transform: {
            width: 6,
            height: 6
        },
        weight: 0.5,
        isObstacle: true
    },
    behaviours: ["changes-collectors-size", "removed-if-energy-0", "blocks-completion"],
    paths: {
        burger: {
            fill: "#f0cf80",
            stroke: "#303030",
            commands: [
                { c: "mt", x: 0.0, y: 0.6 },
                { c: "qc", x: 1.0, y: 0.6, cpx: 0.5, cpy: 0.0 },
                { c: "lt", x: 1.0, y: 1.0 },
                { c: "lt", x: 0.0, y: 1.0 },
                { c: "cp" },
            ]
        },
        ham: {
            fill: "#804030",
            stroke: "#303030",
            commands: [
                { c: "rc", l: -0.02, t: 0.65, r: 1.02, b: 0.8 },
            ]
        },
        seeds: {
            stroke: "#404040",
            lineWidth: 1,
            commands: [
                { c: "mt", x: 0.4, y: 0.4 },
                { c: "lt", x: 0.42, y: 0.42 },
                { c: "mt", x: 0.6, y: 0.5 },
                { c: "lt", x: 0.62, y: 0.52 },
            ]
        }
    }
});