
import { XRayInfo } from "@/components/xray/XRayView";
import { API_ENDPOINTS, API_KEYS } from "@/config/apiConfig";

// Fallback data in case API fails
const fallbackXRayData: Record<string, XRayInfo> = {
  "triund-trek": {
    title: "Triund Trek",
    location: "Dharamshala, Himachal Pradesh",
    coordinates: [32.2432, 76.3232],
    historicalImages: [
      {
        url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        year: "1920",
        description: "Early explorers and British officers used this route during colonial times. The path was much less developed and considered an expedition rather than a trek."
      },
      {
        url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b",
        year: "1965",
        description: "As tourism began to develop in the region, the trek became more established. Early hippie travelers discovered this route in the 60s."
      },
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
        year: "1985",
        description: "The area began to see more local tourism. The forest department established basic facilities along the route."
      }
    ],
    historicalFacts: [
      "Triund was first mapped by the British Geological Survey in 1850.",
      "The name 'Triund' comes from 'Tri' meaning three and 'Und' meaning peaks, referring to the three visible Dhauladhar peaks from this vantage point.",
      "Before becoming a popular trek, Triund meadow was primarily used by local Gaddi shepherds for grazing.",
      "The first tea shop on Triund was established in 1970 by a local named Amar Singh.",
      "In 2010, the Himachal Forest Department introduced regulations to protect the fragile ecosystem from increasing tourism."
    ],
    description: "Triund has a rich history dating back to ancient times when it served as a transit point for traders moving between Tibet and India. The trail follows ancient trading routes that have been used for centuries. The meadow itself has been a traditional grazing ground for the local Gaddi shepherds of Dharamshala. During the British colonial period, it became a popular spot for officers seeking respite from the plains."
  }
};

const fetchXRayData = async (destinationId: string): Promise<XRayInfo> => {
  try {
    const response = await fetch(`${API_ENDPOINTS.XRAY}/${destinationId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEYS.DESTINATION_API}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.xrayInfo;
  } catch (error) {
    console.error(`Error fetching XR-AY data for ${destinationId}:`, error);
    
    // Return fallback data if available, or generate placeholder data
    if (fallbackXRayData[destinationId]) {
      return fallbackXRayData[destinationId];
    }
    
    // Generate generic placeholder data if no fallback is available
    return {
      title: "Historical Information",
      location: "Location information unavailable",
      historicalImages: [
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          year: "N/A",
          description: "Historical image not available. We're working on gathering historical records for this location."
        }
      ],
      historicalFacts: [
        "Historical facts for this destination are currently being researched.",
        "Check back later for updated information."
      ],
      description: "Historical information about this destination is currently being compiled. Please check back later for a detailed historical perspective on this location."
    };
  }
};

const xrayService = {
  fetchXRayData
};

export default xrayService;
