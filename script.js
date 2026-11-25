function recommend() {
    const crop = document.getElementById("crop").value;
    const nitrogen = Number(document.getElementById("nitrogen").value);
    const phosphorus = Number(document.getElementById("phosphorus").value);
    const potassium = Number(document.getElementById("potassium").value);
    const ph = Number(document.getElementById("ph").value);
    const area = Number(document.getElementById("area").value);

    const language = document.getElementById("language").value;
    const te = language === "te";

const targets = {
    Rice: { n: 44, p: 22, k: 22 },
    Maize: { n: 54, p: 27, k: 20 },
    Groundnut: { n: 9, p: 18, k: 18 },
    Cotton: { n: 44, p: 22, k: 22 },
    Chilli: { n: 70, p: 28, k: 28 },
    Tomato: { n: 50, p: 28, k: 32 }
};
 if (targets[crop] === undefined) {
    document.getElementById("result").innerHTML =
        "Fertilizer recommendation data is not available for this crop yet.";
    return;
}   

    if (!crop ||
        document.getElementById("nitrogen").value === "" ||
        document.getElementById("phosphorus").value === "" ||
        document.getElementById("potassium").value === "" ||
        document.getElementById("ph").value === "" ||
        document.getElementById("area").value === "" ||
        area <= 0 || ph < 0 || ph > 14) {
        alert(te ? "దయచేసి అన్ని వివరాలను సరిగ్గా నమోదు చేయండి." :
            "Please enter all details correctly.");
        return;
    }
if (!targets[crop]) {
    alert("Fertilizer data is not available for this crop yet.");
    return;
}
const totalTargetN = targets[crop].n * area;
const totalTargetP = targets[crop].p * area;
const totalTargetK = targets[crop].k * area;

const remainingN = Math.max(0, totalTargetN - nitrogen);
const remainingP = Math.max(0, totalTargetP - phosphorus);
const remainingK = Math.max(0, totalTargetK - potassium);

    const low = te ? "తక్కువ" : "Low";
    const medium = te ? "మధ్యస్థం" : "Medium";
    const high = te ? "ఎక్కువ" : "High";

    const soilType = ph < 6.5
        ? (te ? "ఆమ్ల నేల" : "Acidic")
        : ph <= 7.5
        ? (te ? "తటస్థానికి దగ్గరగా" : "Near Neutral")
        : (te ? "క్షార నేల" : "Alkaline");

    document.getElementById("result").innerHTML = `
        <h2>${te ? "🌱 నేల ఆరోగ్య డాష్‌బోర్డ్" : "🌱 Soil Health Dashboard"}</h2>

        <h3>${te ? "పంట:" : "Crop:"} ${crop}</h3>

        <div class="nutrient-card">
            <h3>${te ? "నత్రజని (N)" : "Nitrogen (N)"}</h3>
            <p>${nitrogen < 40 ? low : nitrogen <= 80 ? medium : high}</p>
        </div>

        <div class="nutrient-card">
            <h3>${te ? "భాస్వరం (P)" : "Phosphorus (P)"}</h3>
            <p>${phosphorus < 40 ? low : phosphorus <= 80 ? medium : high}</p>
        </div>

        <div class="nutrient-card">
            <h3>${te ? "పొటాషియం (K)" : "Potassium (K)"}</h3>
            <p>${potassium < 40 ? low : potassium <= 80 ? medium : high}</p>
        </div>

        <p>${te ? "నేల pH:" : "Soil pH:"} ${ph}</p>

        <p>${te ? "భూమి విస్తీర్ణం:" : "Land Area:"} ${area} ${te ? "ఎకరాలు" : "acres"}</p>

<h3>${te ? "ఎరువుల లెక్కింపు" : "Fertilizer Calculation"}</h3>

<p>${te ? "లక్ష్య నత్రజని:" : "Target Nitrogen:"} ${totalTargetN.toFixed(2)} kg</p>
<p>${te ? "అదనపు నత్రజని అవసరం:" : "Additional Nitrogen Required:"} ${remainingN.toFixed(2)} kg</p>

<p>${te ? "లక్ష్య భాస్వరం:" : "Target Phosphorus:"} ${totalTargetP.toFixed(2)} kg</p>
<p>${te ? "అదనపు భాస్వరం అవసరం:" : "Additional Phosphorus Required:"} ${remainingP.toFixed(2)} kg</p>

<p>${te ? "లక్ష్య పొటాషియం:" : "Target Potassium:"} ${totalTargetK.toFixed(2)} kg</p>
<p>${te ? "అదనపు పొటాషియం అవసరం:" : "Additional Potassium Required:"} ${remainingK.toFixed(2)} kg</p>
        <p>${te ? "నేల రకం:" : "Soil Type:"} ${soilType}</p>

        <p>${te
            ? "పంటకు తగిన ఎరువుల సలహా కోసం నేల పరీక్ష నిపుణుడిని సంప్రదించండి."
            : "Please consult a soil-testing expert for crop-specific fertilizer advice."}</p>
    `;
}
function changeLanguage() {
    const language = document.getElementById("language").value;

    if (language === "te") {
        document.getElementById("title").innerText = "స్మార్ట్ ఎరువుల సిఫార్సు వ్యవస్థ";
        document.getElementById("description").innerText = "మీ పంటలకు సరైన ఎరువుల సూచనలు పొందండి.";
        document.getElementById("cropLabel").innerText = "పంట పేరు నమోదు చేయండి:";
        document.getElementById("nitrogenLabel").innerText = "నత్రజని (N):";
        document.getElementById("phosphorusLabel").innerText = "భాస్వరం (P):";
        document.getElementById("potassiumLabel").innerText = "పొటాషియం (K):";
        document.getElementById("phLabel").innerText = "నేల pH:";
        document.getElementById("locationLabel").innerText = "మీ ప్రాంతం నమోదు చేయండి:";
        document.getElementById("recommendButton").innerText = "సిఫార్సు పొందండి";
    } else {
        document.getElementById("title").innerText = "Smart Fertilizer Recommendation System";
        document.getElementById("description").innerText = "Get suitable fertilizer recommendations for your crops.";
        document.getElementById("cropLabel").innerText = "Enter Crop Name:";
        document.getElementById("nitrogenLabel").innerText = "Nitrogen (N):";
        document.getElementById("phosphorusLabel").innerText = "Phosphorus (P):";
        document.getElementById("potassiumLabel").innerText = "Potassium (K):";
        document.getElementById("phLabel").innerText = "Soil pH:";
        document.getElementById("locationLabel").innerText = "Enter Your Location:";
        document.getElementById("recommendButton").innerText = "Get Recommendation";
    }
}

document.getElementById("language").addEventListener("change", changeLanguage);
function downloadReport() {
    const result = document.getElementById("result").innerText;

    if (!result.trim()) {
        alert("Please get a fertilizer recommendation first!");
        return;
    }

    const report = "SMART FERTI - FERTILIZER REPORT\n\n" + result;

    const blob = new Blob([report], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "Smart-Ferti-Report.txt";

    link.click();

    URL.revokeObjectURL(link.href);
}
function startVoiceInput(fieldId) {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice input is not supported in this browser. Try Chrome.");
        return;
    }

    const recognition = new SpeechRecognition();

    const language = document.getElementById("language").value;
    recognition.lang = language === "te" ? "te-IN" : "en-IN";

    recognition.onresult = function(event) {
        let spokenText = event.results[0][0].transcript.trim();

    
const teluguCrops = {
    "వరి": "Rice",
    "మొక్కజొన్న": "Maize",
    "వేరుశెనగ": "Groundnut",
    "పత్తి": "Cotton",
    "మిరప": "Chilli",
    "టమాట": "Tomato",
    "గోధుమ": "Wheat",
    "చెరకు": "Sugarcane",
    "బంగాళాదుంప": "Potato",
    "ఉల్లిపాయ": "Onion",
    "వంకాయ": "Brinjal",
    "బెండకాయ": "Okra",
    "సోయాబీన్": "Soybean",
    "పొద్దుతిరుగుడు": "Sunflower",
    "ఆవాలు": "Mustard",
    "సజ్జలు": "Millet",
    "జొన్న": "Sorghum",
    "అరటి": "Banana",
    "మామిడి": "Mango",
    "కొబ్బరి": "Coconut",
    "పసుపు": "Turmeric",
    "అల్లం": "Ginger",
    "బొప్పాయి": "Papaya"
};

        if (fieldId === "crop") {
            spokenText = teluguCrops[spokenText] || spokenText;

            const cropField = document.getElementById("crop");
            const option = [...cropField.options].find(
                item => item.value.toLowerCase() === spokenText.toLowerCase()
            );

            if (option) {
                cropField.value = option.value;
            } else {
                alert("Crop not recognised. Please try again.");
            }
        }
    };

    recognition.onerror = function() {
        alert("Voice input failed. Please try again.");
    };

    recognition.start();
}
function previewCropImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select an image.");
        return;
    }

    const preview = document.getElementById("cropPreview");
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
}

document.getElementById("cameraInput")
    .addEventListener("change", previewCropImage);

document.getElementById("uploadInput")
    .addEventListener("change", previewCropImage);
