import React from "react";
import Sketch from "react-p5";

const AdvancedParticleSwirlAnimation = () => {
  let particles = [];
  const maxParticles = 400; // Increased number of particles for more complexity

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(0);

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle(p5));
    }
  };

  const draw = (p5) => {
    p5.background(0, 20); // Fading background with more persistence for longer trails

    // Update and show each particle
    particles.forEach((particle) => {
      particle.update(p5);
      particle.show(p5);
    });
  };

  class Particle {
    constructor(p5) {
      this.p5 = p5;
      this.angle = p5.random(p5.TWO_PI);
      this.radius = p5.random(0, p5.width / 4);
      this.radiusSpeed = p5.random(0.2, 1.5); // Slower speeds for outer particles
      this.angleSpeed = p5.random(0.005, 0.03); // Slower rotation
      this.size = p5.random(3, 8);
      this.alpha = p5.random(100, 255); // Lower alpha for a softer effect
      this.colorStart = p5.color(255, 204, 0, this.alpha); // Start color (yellow)
      this.colorEnd = p5.color(0, 204, 255, this.alpha); // End color (cyan)
      this.life = 0; // Life cycle counter
      this.lifeSpan = p5.random(100, 500); // Random lifespan
      this.depth = p5.random(1, 3); // Introduce depth for parallax effect
    }

    update(p5) {
      this.angle += this.angleSpeed * this.depth;
      this.radius += this.radiusSpeed * this.depth;
      this.life++;

      // Reset the particle once it exceeds its lifespan or moves out of bounds
      if (this.life > this.lifeSpan || this.radius > p5.width / 2) {
        this.angle = p5.random(p5.TWO_PI);
        this.radius = p5.random(0, p5.width / 4);
        this.life = 0;
        this.lifeSpan = p5.random(100, 500);
      }
    }

    show(p5) {
      let x = p5.width / 2 + this.radius * p5.cos(this.angle);
      let y = p5.height / 2 + this.radius * p5.sin(this.angle);

      // Interpolate color between start and end colors based on life cycle
      let lerpedColor = p5.lerpColor(
        this.colorStart,
        this.colorEnd,
        this.life / this.lifeSpan
      );

      p5.noStroke();
      p5.fill(lerpedColor);
      p5.ellipse(x, y, this.size);

      // Create a fading trail effect
      let trailLength = 10;
      for (let i = 0; i < trailLength; i++) {
        let trailX =
          p5.width / 2 +
          (this.radius - i * 2) * p5.cos(this.angle - i * this.angleSpeed);
        let trailY =
          p5.height / 2 +
          (this.radius - i * 2) * p5.sin(this.angle - i * this.angleSpeed);
        p5.fill(
          lerpedColor.levels[0],
          lerpedColor.levels[1],
          lerpedColor.levels[2],
          this.alpha - i * (this.alpha / trailLength)
        );
        p5.ellipse(trailX, trailY, this.size * (1 - i / trailLength));
      }
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

export default AdvancedParticleSwirlAnimation;
