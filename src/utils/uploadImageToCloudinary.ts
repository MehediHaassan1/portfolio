/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const uploadImageToCloudinary = async (imageFile: any): Promise<string | undefined> => {
    console.log(imageFile);
    const cloudName = "dpdfti8b0";
    const uploadPreset = "randomImages";
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    if (!imageFile || imageFile.length === 0) {
        return undefined;
    }
    const formData = new FormData();
    formData.append("file", imageFile[0] || imageFile)
    formData.append("upload_preset", uploadPreset);

    try {
        const response = await axios.post(cloudinaryUrl, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data.secure_url;
    } catch (error) {
        if (error) {
          console.log("Image upload failed!")
            return undefined;
        }
    }
};

export default uploadImageToCloudinary;