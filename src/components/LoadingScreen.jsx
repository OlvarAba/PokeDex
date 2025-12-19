import React from 'react'

const LoadingScreen = () => {
  return (
   <div className="flex flex-col items-center justify-center h-screen text-2xl font-bold gap-4">
      <span className="loading loading-ring text-warning loading-lg"></span>
      <p>Loading Pokémon...</p>
    </div>
  )
}

export default LoadingScreen
