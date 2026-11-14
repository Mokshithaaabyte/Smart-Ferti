function recommend() {
    const crop = document.getElementById("crop").value;
    const nitrogen = Number(document.getElementById("nitrogen").value);
    const phosphorus = Number(document.getElementById("phosphorus").value);
    const potassium = Number(document.getElementById("potassium").value);
    const ph = Number(document.getElementById("ph").value);

    if (!crop || !document.getElementById("nitrogen").value ||
        !document.getElementById("phosphorus").value ||
        !document.getElementById("potassium").value ||
        !document.getElementById("ph").value ||
        ph < 0 || ph > 14) {
        alert("Please enter all details correctly.");
        return;
    }

    let result = "Soil Analysis for " + crop + "\n";

    result += "Nitrogen: " + (nitrogen < 40 ? "Low" : nitrogen <= 80 ? "Medium" : "High") + "\n";
    result += "Phosphorus: " + (phosphorus < 40 ? "Low" : phosphorus <= 80 ? "Medium" : "High") + "\n";
    result += "Potassium: " + (potassium < 40 ? "Low" : potassium <= 80 ? "Medium" : "High") + "\n";

    result += "Soil pH: " + ph + "\n";
    result += "Please consult a soil-testing expert for a crop-specific fertilizer recommendation.";

    document.getElementById("result").innerHTML = `
    <h2>🌱 Soil Health Dashboard</h2>
    <h3>Crop: ${crop}</h3>

    <div class="nutrient-card">
        <h3>Nitrogen (N)</h3>
        <p>${nitrogen < 40 ? "Low" : nitrogen <= 80 ? "Medium" : "High"}</p>
    </div>

    <div class="nutrient-card">
        <h3>Phosphorus (P)</h3>
        <p>${phosphorus < 40 ? "Low" : phosphorus <= 80 ? "Medium" : "High"}</p>
    </div>

    <div class="nutrient-card">
        <h3>Potassium (K)</h3>
        <p>${potassium < 40 ? "Low" : potassium <= 80 ? "Medium" : "High"}</p>
    </div>

    <p>Soil pH: ${ph}</p>
<p>Soil Type: ${
    ph < 6.5 ? "Acidic" :
    ph <= 7.5 ? "Near Neutral" : "Alkaline"
}</p>
    <p>Please consult a soil-testing expert for crop-specific fertilizer advice.</p>
`;
}
function changeLanguage() {
    const language = document.getElementById("language").value;

    if (language === "te") {
        document.getElementById("cropLabel").innerText = "పంట పేరు నమోదు చేయండి:";
document.getElementById("nitrogenLabel").innerText = "నత్రజని (N):";
document.getElementById("phosphorusLabel").innerText = "భాస్వరం (P):";
document.getElementById("potassiumLabel").innerText = "పొటాషియం (K):";
document.getElementById("phLabel").innerText = "నేల pH:";
document.getElementById("locationLabel").innerText = "మీ ప్రాంతం నమోదు చేయండి:";
document.getElementById("recommendButton").innerText = "సిఫార్సు పొందండి";
        alert("తెలుగు భాష ఎంపిక చేయబడింది!");
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
        alert("English language selected!");
    }
}

document.getElementById("language").addEventListener("change", changeLanguage);
function changeLanguage() {
    const language = document.getElementById("language").value;

    if (language === "te") {
        document.getElementById("title").innerText = "స్మార్ట్ ఎరువుల సిఫార్సు వ్యవస్థ";
        document.getElementById("description").innerText = "మీ పంటలకు సరైన ఎరువుల సూచనలు పొందండి.";
    } else {
        document.getElementById("title").innerText = "Smart Fertilizer Recommendation System";
        document.getElementById("description").innerText = "Get suitable fertilizer recommendations for your crops.";
    }
}

document.getElementById("language").addEventListener("change", changeLanguage);
