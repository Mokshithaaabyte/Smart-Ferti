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

    const totalTargetN = targets[crop] * area;
    const remainingN = Math.max(0, totalTargetN - nitrogen);

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

        <h3>${te ? "అదనపు నత్రజని లెక్కింపు" : "Additional Nitrogen Calculation"}</h3>

        <p>${te ? "లక్ష్య నత్రజని:" : "Target Nitrogen:"} ${totalTargetN.toFixed(2)} kg</p>

        <p>${te ? "ప్రస్తుత నత్రజని:" : "Current Nitrogen:"} ${nitrogen} kg</p>

        <p>${te ? "అవసరమైన అదనపు నత్రజని:" : "Additional Nitrogen Required:"} ${remainingN.toFixed(2)} kg</p>

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
