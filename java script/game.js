// Load textures
const loadTexture = texture => new Promise(resolve => {
    const image = new Image()
    image.addEventListener('load', () => {
      resolve(image)
    })
  
    image.src = texture
  })
  
  Promise.allSettled([
    loadTexture('./floor.jpg'),
    loadTexture('./wall.jpg'),
    loadTexture('./target.jpg'),
    loadTexture('./box.jpg'),
    loadTexture('./cat.png'),
  ]).then(results => {
    const [
      floorTexture,
      wallTexture,
      targetTexture,
      boxTexture,
      catTexture
    ] = results.map(result => result.value)
  
    // Define game objects
    const floor = new Array(9).fill(new Array(9).fill('X'))
    const walls = [
      [' ', ' ', 'X', 'X', 'X', 'X', 'X', 'X', ' '],
      ['X', 'X', 'X', ' ', ' ', ' ', ' ', 'X', ' '],
      ['X', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
      ['X', 'X', 'X', ' ', ' ', ' ', ' ', 'X', ' '],
      ['X', ' ', 'X', 'X', ' ', ' ', ' ', 'X', ' '],
      ['X', ' ', 'X', ' ', ' ', ' ', ' ', 'X', 'X'],
      ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
      ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
      ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ]
    const targets = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' '],
      [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' '],
      [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ]
    const boxes = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', 'X', 'X', 'X', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ]
    const player = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ']]]]