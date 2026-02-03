"use client"

import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSnowPreset } from "@tsparticles/preset-snow"

const Snow = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSnowPreset(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

  return (
    <Particles
      id="snow-background"
      options={{
        preset: "snow",
        background: {
          color: {
            value: "transparent", // keep background transparent
          },
        },
        particles: {
            number:{
                value: 40,
            },
            size:{
                value: { min: 1, max: 3},
            },
          color: {
            value: "#ffffff",
          },
        },
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  )
}

export default Snow