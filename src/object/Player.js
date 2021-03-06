export default class PlayerSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(config){
        super(config.scene, config.x, config.y);
        config.scene.physics.world.enable(this);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);

        // player 动画
        this.scene.anims.create({
            key: "left",
            frames: this.scene.anims.generateFrameNumbers("link", {start: 10, end: 19}),
            frameRate: 15,
            repeat: -1
        })
        this.scene.anims.create({
            key: "jump",
            frames: this.scene.anims.generateFrameNumbers("link", {start: 20, end: 29}),
            frameRate: 15,
            repeat: -1
        })
        this.scene.anims.create({
            key: "turn",
            frames: this.scene.anims.generateFrameNumbers("link", {start: 0, end: 9}),
            frameRate: 15,
            repeat: -1
        })
 
        // 添加控制按键
        this.keys = {
            left: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            down: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O),
            right: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            up: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA),   // ",键"
        }


        this.anims.play('left')
    }
    update(time, delta){
        if (this.keys.left.isDown) {
            this.setVelocityX(-160)
            this.flipX = false
            this.anims.play('left', true)
        }
        else if (this.keys.right.isDown) {
            this.setVelocityX(160)
            // 翻转 X ,动画执行 left
            this.flipX = true
            this.anims.play('left', true)
        }
        // 触地才允许跳跃
        else if (this.keys.up.isDown ) {
            this.setVelocityY(-300)
        }
        else {
            this.setVelocityX(0)
            this.flipX = false
            this.anims.play('turn')
        }


    }
}