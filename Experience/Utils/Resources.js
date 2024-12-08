import * as THREE from "three";

import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Experience from "../Experience.js";

export default class Resources extends EventEmitter {
    constructor(assets) {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;

        this.assets = assets;

        this.items = {};
        this.queue = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }
    startLoading() {
        for (const asset of this.assets) {
            if (asset.type === "glbModel") {
                this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.singleAssetLoaded(asset, file);
                });
            } else if (asset.type === "videoTexture") {
                this.video = this.video || {};
                this.videoTexture = this.videoTexture || {};
    
                // Create video element
                this.video[asset.name] = document.createElement("video");
                this.video[asset.name].src = asset.path;
                this.video[asset.name].crossOrigin = "anonymous"; // Ensure cross-origin compatibility
                this.video[asset.name].muted = true; // Required for autoplay
                this.video[asset.name].playsInline = true;
                this.video[asset.name].autoplay = true;
                this.video[asset.name].loop = true;
    
                // Wait for the video to be ready
                this.video[asset.name].addEventListener("canplaythrough", () => {
                    this.video[asset.name].play().catch((error) => {
                        console.warn(`Autoplay blocked: ${asset.path}`, error);
                    });
    
                    // Create texture only after video is ready
                    this.videoTexture[asset.name] = new THREE.VideoTexture(
                        this.video[asset.name]
                    );
                    this.videoTexture[asset.name].minFilter = THREE.LinearFilter;
                    this.videoTexture[asset.name].magFilter = THREE.LinearFilter;
                    this.videoTexture[asset.name].generateMipmaps = false;
                    this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;
    
                    this.singleAssetLoaded(asset, this.videoTexture[asset.name]);
                });
    
                // Handle video loading errors
                this.video[asset.name].addEventListener("error", (e) => {
                    console.error(`Failed to load video: ${asset.path}`, e);
                });
            }
        }
    }

    singleAssetLoaded(asset, file) {
        this.items[asset.name] = file;
        this.loaded++;

        if (this.loaded === this.queue) {
            this.emit("ready");
        }
    }
}
