import Vector2d from '../Vector2d';
class Seek {
    constructor(element) {
        this.element = element;
        this.game = this.element.game;
        this.pos = this.element.pos;
        this.vel = this.element.vel;
        this.max = this.element.max;
    }
    update(weight) {
        const desired = new Vector2d();
        desired.add(this.game.target.pos);
        desired.subtract(this.pos);

        desired.normalize(this.max.speed);
        // Steer force
        const steer = new Vector2d();
        steer.add(desired);
        steer.subtract(this.vel);

        if (steer.length() > this.max.force) {
            steer.normalize(this.max.force);
        }
        steer.multiply(weight);
        return steer;
    }
}

export default Seek;
