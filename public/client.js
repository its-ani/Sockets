let socket = io()

socket.on("connect", ()=>{
    document.getElementById('socketId').innerText = socket.id
})


function colorTheBox(color){
    document.querySelector('.'+color).style.backgroundColor = color
    setTimeout(()=>{
        document.querySelector('.'+color).style.backgroundColor = null    
    }, 500)
}

document.getElementById('colorIt').onclick = function() {
    
    const color = document.getElementById('selectedColor').value
    // colorTheBox(color)
    socket.emit('colorit', {color})
    // console.log("color")
    
}

socket.on('colorit', (data)=>{
    colorTheBox(data.color)
})

// console.log(a())
// console.log(a)