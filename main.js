


const plswork = document.querySelector("body")
const divs = document.querySelectorAll('div')
plswork.style.zIndex = '0'
// plswork.appendChild(container)
let size = Math.random()*50;
let count=0;
let sound=.1
plswork.addEventListener('click',()=>{
  
    class Jared{
    constructor(el) {
      this.link = document.createElement('a')
      this.link.href="https://www.youtube.com/watch?v=9Deg7VrpHbM"
    this.node = document.createElement('img')
    this.node.setAttribute('id','jared')
    this.node.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAD8DASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABQYCBAcDAQD/xAAwEAABAwMCAwgBAwUAAAAAAAABAgMEAAUREiEGMUETFCIyUWFxgZFCUnIHIyShsf/EABkBAAIDAQAAAAAAAAAAAAAAAAEDAgQFAP/EACARAAICAwACAwEAAAAAAAAAAAECAAMEESEFEiIxQVH/2gAMAwEAAhEDEQA/AH6JGMkdq4vCSdgKJNthoYb2+65W9OIbP8a7yHEx2VunkBSMnIZ7CPwQY1CogP7OUqY3Eb1Lcyr9oJzS3P4ifUopQ6W09AlW9UrvLU8onVkqO9BXCc89qAQfZloAQy1fpgcBEhzY8is0x2u/d5IQ+cKP6s0gb1ftzig4N65lXUPqJo60IdTpdSFoPRW4obNjuxWtcJakozugE7D2rrZ5PeWNJPjRsfirq0hSSCMil15BpbkRdQti6MrwD/hMfwFU7+9pjIQDssnPxU4LoRAbJIAS2FHfkBS09fWr3HL8dtbaUpOkr/UDyNJ6bmjqx8BE6/X6UXymAwChBxqV1qjAvcmQdEppKVDqhWa9vVmekLUVvPqB5JSrAB+Kq2Xh1cWUl9bp0pG4Bzq+atyapuGXZnYjK84xkVCJxRb2XtLzqkq6gio8SRnX4KUxE6nE+lKMdiS2tRfja0nrkE/ihJFdTbuGZqXXmnGVBTboO9NSlYrOv6eEpaaHiwlZwCOQxT8peOdZ97aMHruAJbmqxvJBOO7q2BP7TSbaHnGIjypCzknyEYwOmKbmVBUcIVukowfsYpM4uirt0Vbra9SXNgc09CBa2/7H1ptAJGFcbfcLn3WfdWbeykbuOAgH2B5fnH3RCzyeCZF6mwpk94R2wkx5TzpQhe3jAOAAM4xn6rKlvFJOd9/zXMO75xzq8BIsdnQ5NRRL4Rn3qbEZubkKI22kRpDqh2a1jz+YDrgDOM4OM7UPjT4KpjrDTzcpCFkB0JKdY9QDvj5+qz1LpSskcvSrUSQpLyCnIOocutBl5J1n8PZqipjsFpHcnQytw4SQM0yWG4PzLNFkSlJU8tHjV60ipSZ0Zlkq0rTgpNN0VCmIrbSE4CUhOB7Vk5bKpG5IJwyiu9xYuGnVEKSN6G3a5w7xHMZnxrTvj2qF7tAuTWppfZyEjCVEbEehobwzZpUN6Q/MSEEJ0IRqB1Z5nI6VvZXjzXYWUTJxfI7ABguDwrCkzVi4zlRYoHhUhGpWfT2r6NwZFfuslh2+MswmhlEgtlRd9gNsYo7NiPrSoNJVg8gAaBPJuTThSIElQHUNk5pIVwPqXTkVOenU8g8Gw1XWVHuF5bbhtD+3IZbJLx9geVQZ4fZhzFq7UvtIXhpenGoeuKswu/OupSqHJbxz7Rsgf8ow9GdRAkOFJW7oPZpSMnPxR9LX4BOGRUh4ZYhXKDHDeFIK0DB2ozF4mjFzSlvXnpWcQ7fOfdCREfTv5nGykf7pvtltEUhx7SpeOnSl1+IbJb5DkTd5MKs//9k="
    this.link.append(this.node)
    el.append(this.link)
    if (count>10) divs[Math.floor(Math.random()*divs.length)].append(this.node)
    this.node.style.left=`${(Math.random()*10)*92}px`;
    this.node.style.top=`${(Math.random()*10)*63}px`;
    this.node.style.height= `${size}px`;
    this.node.style.width = `${size}px`;
    this.node.style.display = "absolute"
    this.node.style.zIndex = "9999"
    }


}
  
    const aud = new Audio('https://codeskulptor-demos.commondatastorage.googleapis.com/descent/Zombie.mp3')
    aud.volume=sound
    aud.play();
    const jared1 = new Jared(plswork);
    divs[Math.floor(Math.random()*divs.length)].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    plswork.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    size += Math.random()*Math.random()*50;
    count++
    if (sound<.95) sound+=.05

})































