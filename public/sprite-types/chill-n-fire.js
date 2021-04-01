spriteTypes["chill-n-fire"] = new SpriteType({
    id: "chill-n-fire",
    name: "Chill 'n Fire",
    shape: SHAPES.BOX,
    shaded: false,
    collidesWithObstacles: true,
    movedByOtherSprites: false,
    resizable: true,
    //collisionBox: { t: 0.1, r: 0.9, b: 0.9, l: 0.1, },

    spriteProps: {
        isEnemy: true,
        maxVelocity: { x: 2, y: 2 },
        weight: 0,
        energy: 4,
        floatStep: 80,
        floatFactor: 120,
        blowTop: 0.6,
        blowBottom: 1.1,
        shootY: 0.85,
        transform: {
            pattern: "mad",
            energyThreshold: 1
        }
    },
    patterns: {
        default: {
            behaviours: ["idles", "blocks-completion", "blows", "floats", "kills-player", "dies", "falls-if-dead", "changes-pattern-when-energy-low"],
            rounds: 420,
            animation: "idle",
            next: "warmup"
        },
        warmup: {
            behaviours: ["idles", "blocks-completion", "kills-player", "dies", "falls-if-dead", "changes-pattern-when-energy-low"],
            rounds: 50,
            animation: "transform",
            next: "fire"
        },        
        fire: {
            behaviours: ["idles", "blocks-completion", "shoots-fireball", "floats", "kills-player", "dies", "falls-if-dead", "changes-pattern-when-energy-low"],
            rounds: 420,
            animation: "fury",
            next: "cooldown",
            spriteProps: {
                reloadCounter: 100,
                reloadWait: 200,
            }
        },
        cooldown: {
            behaviours: ["idles", "blocks-completion", "kills-player", "dies", "falls-if-dead", "changes-pattern-when-energy-low"],
            rounds: 50,
            animation: "transform",
            next: "default"
        },       
        mad: {
            behaviours: ["idles", "blocks-completion", "shoots-fireball", "floats", "kills-player", "dies", "falls-if-dead"],
            animation: "fury",
            spriteProps: {
                reloadCounter: 100,
                reloadWait: 150,
            }
        },
        dead: {
            behaviours: ["falls-if-dead"],
            animation: "dead",
        }, 
    },
    animations: {
        idle: [
            { frame: "chill" },
        ],
        blow: [
            { frame: "blow" },
        ],
        transform: [
            { frame: "fury", s: 0.05 },
            { frame: "chill", s: 0.05, loop: 0 },
        ],         
        fury: [
            { frame: "fury" },
        ],        
        attack: [
            { frame: "blow-fire", s: 0.5 },
            { frame: "fury" },
        ],
        dead: [
            { frame: "dead" },
        ]
    },
    frames: {
        "chill": [
            { path: "chill-horns" },
            { path: "chill-body" },
            { path: "chill-chin" },
            { path: "chill-mouth" },
            { path: "chill-eyes" },
            { path: "chill-wrinkles" },
        ],
        "blow": [
            { path: "chill-horns" },
            { path: "chill-body" },
            { path: "blow-chin" },
            { path: "blow-mouth" },
            { path: "chill-eyes" },
            { path: "chill-wrinkles" },
        ],
        "fury": [
            { path: "fire-horns" },
            { path: "fire-body" },
            { path: "fire-chin" },
            { path: "fire-mouth" },
            { path: "fire-eyes" },
            { path: "fire-wrinkles", y: -0.02 },
        ],
        "blow-fire": [
            { path: "fire-horns" },
            { path: "fire-body" },
            { path: "fire-chin" },
            { path: "fire-mouth-blow" },
            { path: "fire-eyes" },
            { path: "fire-wrinkles", y: -0.02 },
        ],        
        "dead": [
            { path: "chill-horns" },
            { path: "chill-body" },
            { path: "chill-chin" },
            { path: "chill-mouth" },
            { path: "xx-eyes" },
            { path: "chill-wrinkles" },
        ],
    },
    paths: {
        "chill-body": {
            fill: "#b0b0ff",
            stroke: "#303030",
            commands: [
                { c: "rc", l: 0, t: 0, b: 0.9, r: 1 },
            ]
        },
        "chill-horns": {
            fill: "#b0b0ff",
            stroke: "#303030",
            commands: [
                { c: "mt", x: 0.13, y: 0.0 },
                { c: "lt", x: 0.18, y: -0.1 },
                { c: "lt", x: 0.23, y: 0.0 },
                { c: "cp" },
                { c: "mt", x: 0.80, y: 0.0 },
                { c: "lt", x: 0.85, y: -0.1 },
                { c: "lt", x: 0.90, y: 0.0 },
                { c: "cp" },
            ]
        },
        "chill-chin": {
            fill: "#b0b0ff",
            stroke: "#303030",
            commands: [
                { c: "mt", x: 0.25, y: 0.8 },
                { c: "lt", x: 0.25, y: 1.0 },
                { c: "lt", x: 0.90, y: 1.0 },
                { c: "lt", x: 0.90, y: 0.8 },
            ]
        },
        "blow-chin": {
            fill: "#b0b0ff",
            stroke: "#303030",
            commands: [
                { c: "mt", x: 0.23, y: 0.8 },
                { c: "lt", x: 0.23, y: 1.0 },
                { c: "lt", x: 0.92, y: 1.0 },
                { c: "lt", x: 0.92, y: 0.8 },
            ]
        },
        "chill-mouth": {
            stroke: "#303030",
            commands: [
                { c: "mt", x: 0.38, y: 0.9 },
                { c: "lt", x: 0.82, y: 0.9 },

                { c: "mt", x: 0.39, y: 0.9 },
                { c: "lt", x: 0.42, y: 0.94 },
                { c: "lt", x: 0.45, y: 0.9 },

                { c: "mt", x: 0.75, y: 0.9 },
                { c: "lt", x: 0.78, y: 0.94 },
                { c: "lt", x: 0.81, y: 0.9 },
            ]
        },
        "blow-mouth": {
            fill: "#303030",
            stroke: "#303030",
            commands: [
                { c: "rc", l: 0.7, t: 0.82, r: 0.8, b: 0.92 },
                { c: "mt", x: 0.7, y: 0.8 },
                { c: "lt", x: 0.7, y: 0.95 },
                { c: "mt", x: 0.8, y: 0.8 },
                { c: "lt", x: 0.8, y: 0.95 },
            ]
        },
        "chill-eyes": {
            stroke: "#303030",
            lineWidth: 1.5,
            commands: [
                { c: "mt", x: 0.22, y: 0.7 },
                { c: "lt", x: 0.32, y: 0.7 }, 

                { c: "mt", x: 0.85, y: 0.7 },
                { c: "lt", x: 0.95, y: 0.7 },               
            ]
        },
        "xx-eyes": {
            stroke: "#303030",
            lineWidth: 1.5,
            commands: [
                { c: "mt", x: 0.22, y: 0.65 },
                { c: "lt", x: 0.32, y: 0.75 }, 
                { c: "mt", x: 0.22, y: 0.75 },
                { c: "lt", x: 0.32, y: 0.65 },

                { c: "mt", x: 0.85, y: 0.65 },
                { c: "lt", x: 0.95, y: 0.75 },
                { c: "mt", x: 0.85, y: 0.75 },
                { c: "lt", x: 0.95, y: 0.65 },                
            ]
        },
        "chill-wrinkles": {
            stroke: "#303030",
            lineWidth: 1,
            commands: [
                { c: "mt", x: 0.5, y: 0.3 },
                { c: "lt", x: 0.7, y: 0.3 }, 

                { c: "mt", x: 0.5, y: 0.35 },
                { c: "lt", x: 0.7, y: 0.35 },  

                { c: "mt", x: 0.6, y: 0.0 },
                { c: "lt", x: 0.6, y: 0.1 },             
            ]
        },
        "fire-body": {
            fill: "#ff6060",
            stroke: "#ffff40",
            commands: [
                { c: "rc", l: 0, t: -0.02, b: 0.88, r: 1 },
            ]
        },
        "fire-horns": {
            fill: "#ff6060",
            stroke: "#ffff40",
            commands: [
                { c: "mt", x: 0.13, y: 0.0 },
                { c: "lt", x: 0.18, y: -0.1 },
                { c: "lt", x: 0.23, y: 0.0 },
                { c: "cp" },
                { c: "mt", x: 0.80, y: 0.0 },
                { c: "lt", x: 0.85, y: -0.1 },
                { c: "lt", x: 0.90, y: 0.0 },
                { c: "cp" },
            ]
        },
        "fire-chin": {
            fill: "#ff6060",
            stroke: "#ffff40",
            commands: [
                { c: "mt", x: 0.22, y: 0.8 },
                { c: "lt", x: 0.22, y: 1.0 },
                { c: "lt", x: 0.92, y: 1.0 },
                { c: "lt", x: 0.92, y: 0.8 },
            ]
        },
        "fire-mouth": {
            stroke: "#ffff40",
            commands: [
                { c: "mt", x: 0.38, y: 0.9 },
                { c: "lt", x: 0.82, y: 0.9 },

                { c: "mt", x: 0.39, y: 0.9 },
                { c: "lt", x: 0.42, y: 0.94 },
                { c: "lt", x: 0.45, y: 0.9 },

                { c: "mt", x: 0.75, y: 0.9 },
                { c: "lt", x: 0.78, y: 0.94 },
                { c: "lt", x: 0.81, y: 0.9 },
            ]
        },
        "fire-mouth-blow": {
            fill: "#ffffff",
            stroke: "#ffff30",
            commands: [
                { c: "rc", l: 0.7, t: 0.82, r: 0.8, b: 0.92 },
                { c: "mt", x: 0.7, y: 0.8 },
                { c: "lt", x: 0.7, y: 0.95 },
                { c: "mt", x: 0.8, y: 0.8 },
                { c: "lt", x: 0.8, y: 0.95 },
            ]
        },        
        "fire-eyes": {
            stroke: "#ffff30",
            fill: "#ffffff",
            lineWidth: 1.5,
            commands: [
                { c: "rc", l: 0.21, r: 0.33, t: 0.67, b: 0.71 }, 
                { c: "rc", l: 0.84, r: 0.96, t: 0.67, b: 0.71 },               
            ]
        },
        "fire-wrinkles": {
            stroke: "#ffff40",
            lineWidth: 1,
            commands: [
                { c: "mt", x: 0.5, y: 0.3 },
                { c: "lt", x: 0.7, y: 0.3 }, 

                { c: "mt", x: 0.5, y: 0.35 },
                { c: "lt", x: 0.7, y: 0.35 },  

                { c: "mt", x: 0.6, y: 0.0 },
                { c: "lt", x: 0.6, y: 0.1 },             
            ]
        },
    }
});