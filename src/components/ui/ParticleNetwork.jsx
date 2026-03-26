import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT  = 160;
const SPREAD          = 9;
const DEPTH           = 4;
const CONNECTION_DIST = 2.0;
const PARTICLE_COLOR  = 0x5ecfbe;
const LINE_OPACITY    = 0.13;

export default function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Scene & Camera
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 4.5;

    // ── Particles ──────────────────────────────────────────────
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 2] = (Math.random() - 0.5) * DEPTH;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pointsMat = new THREE.PointsMaterial({
      color:       PARTICLE_COLOR,
      size:        0.045,
      transparent: true,
      opacity:     0.85,
    });

    const points = new THREE.Points(pointsGeo, pointsMat);

    // ── Connection lines (single LineSegments for perf) ────────
    const linePositions = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const ax = positions[i * 3], ay = positions[i * 3 + 1], az = positions[i * 3 + 2];
        const bx = positions[j * 3], by = positions[j * 3 + 1], bz = positions[j * 3 + 2];
        const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2);
        if (dist < CONNECTION_DIST) {
          linePositions.push(ax, ay, az, bx, by, bz);
        }
      }
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));

    const linesMat = new THREE.LineBasicMaterial({
      color:       PARTICLE_COLOR,
      transparent: true,
      opacity:     LINE_OPACITY,
    });

    const lines = new THREE.LineSegments(linesGeo, linesMat);

    // ── Group ──────────────────────────────────────────────────
    const group = new THREE.Group();
    group.add(points);
    group.add(lines);
    scene.add(group);

    // ── Mouse interaction ──────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 0.6;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Animation ──────────────────────────────────────────────
    let autoY = 0, autoX = 0;
    let rafId;

    const animate = () => {
      rafId  = requestAnimationFrame(animate);
      autoY += 0.0006;
      autoX += 0.0002;
      group.rotation.y = autoY +  mouse.x * 0.4;
      group.rotation.x = autoX + -mouse.y * 0.25;
      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      pointsGeo.dispose();
      linesGeo.dispose();
      pointsMat.dispose();
      linesMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
