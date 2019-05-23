export const templatePhoto =()=>{
    const containerPhoto = document.createElement('div');
    // creamos el contenido del login
    const contentPhoto = `<!-- Stream video via webcam -->
    <div class="video-wrap">
        <video id="video" playsinline autoplay></video>
    </div>
    
    <!-- Trigger canvas web API -->
    <div class="controller">
        <button id="snap">Capture</button>
    </div>
    
    <!-- Webcam video snapshot -->
    <canvas id="canvas" width="640" height="480"></canvas>`
    containerPhoto.innerHTML=contentPhoto;
    return containerPhoto;
} 