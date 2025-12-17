// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: "src",          // 소스 루트
  base: "/Roasterium/", // GitHub Pages 배포 경로
  build: {
    outDir: "../dist",  // 빌드 결과물이 루트 기준 dist 폴더에 생성
    emptyOutDir: true,  // 기존 dist 폴더 내용 제거
  },
})
