import React from "react";
import Sketch from "react-p5";

const LightspeedJumpAnimation = () => {
  let stars = [];
  let speed;
  let lightspeedActivated = false;
  let decelerating = false;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    speed = 5;

    for (let i = 0; i < 1000; i++) {
      stars[i] = new Star(p5);
    }

    // Activate lightspeed jump after a short delay
    setTimeout(() => {
      lightspeedActivated = true;
      speed = 50; // Initial speed during the jump
      // Start deceleration after the jump
      setTimeout(() => {
        decelerating = true;
      }, 1000); // Decelerate after 1 second
    }, 2000); // Start jump after 2 seconds
  };

  const draw = (p5) => {
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2);

    // Handle deceleration
    if (decelerating && speed > 5) {
      speed *= 0.95; // Gradually reduce speed to slow down
      if (speed < 5) {
        speed = 5; // Set minimum speed after deceleration
        decelerating = false; // Stop deceleration once speed is low enough
      }
    }

    for (let i = 0; i < stars.length; i++) {
      stars[i].update(p5, speed, lightspeedActivated);
      stars[i].show(p5, lightspeedActivated);
    }
  };

  class Star {
    constructor(p5) {
      this.p5 = p5;
      this.x = p5.random(-p5.width, p5.width);
      this.y = p5.random(-p5.height, p5.height);
      this.z = p5.random(p5.width);
      this.pz = this.z;
      this.color = p5.color(255, 255, 255); // Blue color for the lightspeed effect
    }

    update(p5, speed, lightspeedActivated) {
      this.z -= speed;
      if (this.z < 1) {
        this.z = p5.width;
        this.x = p5.random(-p5.width, p5.width);
        this.y = p5.random(-p5.height, p5.height);
        this.pz = this.z;
      }

      // Star stretching effect during lightspeed jump
      if (lightspeedActivated) {
        this.z -= speed * 0.5; // Accelerate even more during the jump
      }
    }

    show(p5, lightspeedActivated) {
      p5.fill(this.color);
      p5.noStroke();

      let sx = p5.map(this.x / this.z, 0, 1, 0, p5.width);
      let sy = p5.map(this.y / this.z, 0, 1, 0, p5.height);

      if (lightspeedActivated) {
        // Stretch the star into a line
        let px = p5.map(this.x / this.pz, 0, 1, 0, p5.width);
        let py = p5.map(this.y / this.pz, 0, 1, 0, p5.height);
        p5.stroke(this.color);
        p5.strokeWeight(2); // Increase thickness for more visual impact
        p5.line(px, py, sx, sy);
      } else {
        let r = p5.map(this.z, 0, p5.width, 8, 0);
        p5.ellipse(sx, sy, r, r);
      }

      this.pz = this.z;
    }
  }

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className="background-animation">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default LightspeedJumpAnimation;
