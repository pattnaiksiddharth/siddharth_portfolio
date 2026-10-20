/* projects-data.js - Centralized Power BI Project Configuration */

const PROJECTS_DATA = [
  {
    id: "marketing-roi",
    title: "1. Marketing ROI",
    displayName: "Marketing ROI",
    featured: true,
    subtitle: "Multi-Channel Campaign Performance & Budget Optimization",
    description: "End-to-end Power BI analytics measuring multi-channel campaign ROI, CAC, customer LTV, and profit-loss budget scenario forecasting to empower executive growth decisions.",
    folder: "1. Marketing ROI",
    coverImage: "images/projects/marketing-roi/overview.png",
    fallbackCover: "1. Marketing ROI/1. Overview.png",
    screenshots: [
      {
        src: "images/projects/marketing-roi/overview.png",
        fallbackSrc: "1. Marketing ROI/1. Overview.png",
        heading: "1. Overview",
        title: "1. Overview",
        caption: "High-level KPI performance tracking total revenue, spend, and blended ROAS."
      },
      {
        src: "images/projects/marketing-roi/channel-performance.png",
        fallbackSrc: "1. Marketing ROI/2. Channel Performance.png",
        heading: "2. Channel Performance",
        title: "2. Channel Performance",
        caption: "Cross-channel attribution breakdown across Google Ads, Meta, and Organic search."
      },
      {
        src: "images/projects/marketing-roi/campaign-analysis.png",
        fallbackSrc: "1. Marketing ROI/3. Campaign Analysis.png",
        heading: "3. Campaign Analysis",
        title: "3. Campaign Analysis",
        caption: "Granular cohort and campaign level efficiency metrics with CTR and conversion funnels."
      },
      {
        src: "images/projects/marketing-roi/profit-and-loss.png",
        fallbackSrc: "1. Marketing ROI/4. Profit & Loss.png",
        heading: "4. Profit & Loss",
        title: "4. Profit & Loss",
        caption: "Gross profit margins, CAC attribution, and net contribution across business units."
      },
      {
        src: "images/projects/marketing-roi/budget-scenario.png",
        fallbackSrc: "1. Marketing ROI/5. Budget Scenario.png",
        heading: "5. Budget Scenario",
        title: "5. Budget Scenario",
        caption: "Interactive what-if parameters for dynamic ad-spend reallocation and projected returns."
      }
    ],
    pdfLink: "https://drive.google.com/file/d/15rBanqRPwszG8kBhIeRGJS031AXZBQ-b/preview",
    streamlitLink: "https://market-roi-analysis-jiwza9dmpsga95ee2f3hz4.streamlit.app/",
    tools: [
      { name: "Power BI Desktop", icon: "powerbi" },
      { name: "Power BI Service", icon: "powerbi" },
      { name: "Microsoft Excel", icon: "excel" },
      { name: "Power Query", icon: "powerquery" },
      { name: "DAX Studio", icon: "daxstudio" },
      { name: "Google Drive", icon: "gdrive" }
    ],
    technologies: [
      { name: "DAX Measures", icon: "code" },
      { name: "SQL", icon: "database" },
      { name: "Star Schema Modeling", icon: "schema" },
      { name: "ETL Pipelines", icon: "etl" },
      { name: "What-If Parameters", icon: "sliders" },
      { name: "P&L Scenario Modeling", icon: "trending" }
    ],
    insights: [
      { value: 3.4, prefix: "", suffix: "x", label: "Average Campaign ROAS" },
      { value: 24, prefix: "+", suffix: "%", label: "YoY Profit Margin Growth" },
      { value: 38, prefix: "-", suffix: "%", label: "Reduction in Blended CAC" }
    ]
  },
  {
    id: "indian-hair-growth",
    title: "2. Indian HAir Growth Analysis",
    displayName: "Indian HAir Growth Analysis",
    featured: true,
    subtitle: "D2C Market Diagnostics, Retention Cohorts & Consumer Behavior",
    description: "Comprehensive market diagnostic and customer funnel intelligence analyzing retention cohorts, consumer churn, and product benchmarking in India's hair care sector.",
    folder: "2. Indian HAir Growth Analysis",
    coverImage: "images/projects/hair-growth/market-overview.png",
    fallbackCover: "2. Indian HAir Growth Analysis/1. Market Overview.png",
    screenshots: [
      {
        src: "images/projects/hair-growth/market-overview.png",
        fallbackSrc: "2. Indian HAir Growth Analysis/1. Market Overview.png",
        heading: "1. Market Overview",
        title: "1. Market Overview",
        caption: "Industry TAM, segment sizing, and regional market penetration breakdown."
      },
      {
        src: "images/projects/hair-growth/funnel-and-customer-behavior.png",
        fallbackSrc: "2. Indian HAir Growth Analysis/2. Funnel & Customer Behavior.png",
        heading: "2. Funnel & Customer Behavior",
        title: "2. Funnel & Customer Behavior",
        caption: "Stage-by-stage drop-off analytics from discovery to checkout and repeat orders."
      },
      {
        src: "images/projects/hair-growth/cohort-and-retention.png",
        fallbackSrc: "2. Indian HAir Growth Analysis/3. Cohort & Retention.png",
        heading: "3. Cohort & Retention",
        title: "3. Cohort & Retention",
        caption: "Monthly customer cohort heatmap visualizing repeat purchase rate and churn velocity."
      },
      {
        src: "images/projects/hair-growth/product-benchmarking.png",
        fallbackSrc: "2. Indian HAir Growth Analysis/4. Product Benchmarking & Key Insights.png",
        heading: "4. Product Benchmarking & Key Insights",
        title: "4. Product Benchmarking & Key Insights",
        caption: "Cross-SKU efficacy, customer review sentiments, and pricing tier viability."
      }
    ],
    pdfLink: "https://drive.google.com/file/d/1jNQgoPNdc4WJ-oFfGSU9nx6ORtpsaRnE/preview",
    tools: [
      { name: "Power BI Desktop", icon: "powerbi" },
      { name: "Python", icon: "python" },
      { name: "Microsoft Excel", icon: "excel" },
      { name: "Power Query", icon: "powerquery" },
      { name: "Google Drive", icon: "gdrive" }
    ],
    technologies: [
      { name: "DAX", icon: "code" },
      { name: "Cohort Analysis", icon: "calendar" },
      { name: "Funnel Analytics", icon: "funnel" },
      { name: "Exploratory Data Analysis", icon: "search" },
      { name: "Customer Churn Modeling", icon: "trending" }
    ],
    insights: [
      { value: 68, prefix: "", suffix: "%", label: "M3 Customer Retention Rate" },
      { value: 42, prefix: "+", suffix: "%", label: "Repeat Purchase Frequency" },
      { value: 15, prefix: "", suffix: "k+", label: "Consumer Profiles Analyzed" }
    ]
  },
  {
    id: "bhubaneswar-transit-demand",
    title: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard",
    displayName: "Bhubaneswar - Traffic & Public Transport Demand Dashboard",
    featured: true,
    subtitle: "Urban Transit Intelligence, Congestion Heatmaps & Route Optimization",
    description: "Urban mobility intelligence platform tracking peak-hour congestion corridors, route-level ridership bottlenecks, and predictive public transit demand forecasting.",
    folder: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard",
    coverImage: "images/projects/bhubaneswar-transit/kpi-overview.png",
    fallbackCover: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/1. Key Performance Indicators.png",
    screenshots: [
      {
        src: "images/projects/bhubaneswar-transit/kpi-overview.png",
        fallbackSrc: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/1. Key Performance Indicators.png",
        heading: "1. Key Performance Indicators",
        title: "1. Key Performance Indicators",
        caption: "Fleet telemetry, ridership velocity, peak-hour delay indexes, and fuel utilization."
      },
      {
        src: "images/projects/bhubaneswar-transit/congestion-route-analysis.png",
        fallbackSrc: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/2. Congetion Route Analysis.png",
        heading: "2. Congetion Route Analysis",
        title: "2. Congetion Route Analysis",
        caption: "GIS-linked route bottleneck identification and intersection queue length telemetry."
      },
      {
        src: "images/projects/bhubaneswar-transit/demand-forecasting.png",
        fallbackSrc: "3. Bhubaneswar - Traffic & Public Transport Demand Dashboard/3. Demand Forecasting.png",
        heading: "3. Demand Forecasting",
        title: "3. Demand Forecasting",
        caption: "Time-series ridership prediction model by hour, day of week, and weather conditions."
      }
    ],
    pdfLink: "https://drive.google.com/file/d/1v6XJZyAhxKwrvPMc62WkzeoR_h075hun/preview",
    tools: [
      { name: "Power BI Desktop", icon: "powerbi" },
      { name: "Microsoft Excel", icon: "excel" },
      { name: "Python", icon: "python" },
      { name: "Power Query", icon: "powerquery" },
      { name: "Geospatial Maps", icon: "map" },
      { name: "Google Drive", icon: "gdrive" }
    ],
    technologies: [
      { name: "DAX Time Intelligence", icon: "code" },
      { name: "Geospatial Analytics", icon: "map" },
      { name: "Time Series Forecasting", icon: "trending" },
      { name: "Capacity Planning", icon: "sliders" },
      { name: "Route Efficiency Scoring", icon: "schema" }
    ],
    insights: [
      { value: 28, prefix: "-", suffix: "%", label: "Peak Corridor Congestion" },
      { value: 94, prefix: "", suffix: "%", label: "Transit Demand Accuracy" },
      { value: 120, prefix: "+", suffix: "km", label: "Monitored Urban Transit Grid" }
    ]
  },
  {
    id: "myntra-fashion-analysis",
    title: "4. Myntra Fashion Analysis",
    displayName: "Myntra Fashion Analysis",
    featured: true,
    subtitle: "Brand Pricing Elasticity, Discount Optimization & Catalog Intelligence",
    description: "Deep retail catalog benchmarking evaluating brand pricing elasticity, discount strategies, customer sentiment ratings, and SKU velocity across apparel categories.",
    folder: "4. Myntra Fashion Analysis",
    coverImage: "images/projects/myntra-fashion/market-overview.png",
    fallbackCover: "4. Myntra Fashion Analysis/1. Market Overview.png",
    screenshots: [
      {
        src: "images/projects/myntra-fashion/market-overview.png",
        fallbackSrc: "4. Myntra Fashion Analysis/1. Market Overview.png",
        heading: "1. Market Overview",
        title: "1. Market Overview",
        caption: "Catalog distribution across apparel categories, sub-brands, and price bands."
      },
      {
        src: "images/projects/myntra-fashion/pricing-and-branding.png",
        fallbackSrc: "4. Myntra Fashion Analysis/2. Pricing & Branding.png",
        heading: "2. Pricing & Branding",
        title: "2. Pricing & Branding",
        caption: "Discount elasticity curve, MRP vs. selling price spreads, and premium brand pricing."
      },
      {
        src: "images/projects/myntra-fashion/rating-and-product-attributes.png",
        fallbackSrc: "4. Myntra Fashion Analysis/3. Rating & Product Attributes.png",
        heading: "3. Rating & Product Attributes",
        title: "3. Rating & Product Attributes",
        caption: "Customer review correlation with return rates, fabric attributes, and price points."
      }
    ],
    pdfLink: "https://drive.google.com/file/d/11ZqFBGcf_Q7Tlg8YK_CwVY2WJ8HvxQh6/preview",
    tools: [
      { name: "Power BI Desktop", icon: "powerbi" },
      { name: "Python", icon: "python" },
      { name: "Microsoft Excel", icon: "excel" },
      { name: "Power Query", icon: "powerquery" },
      { name: "Google Drive", icon: "gdrive" }
    ],
    technologies: [
      { name: "DAX Aggregations", icon: "code" },
      { name: "Pricing Elasticity", icon: "trending" },
      { name: "Sentiment Correlation", icon: "search" },
      { name: "Star Schema", icon: "schema" },
      { name: "Retail Merchandising KPI", icon: "sliders" }
    ],
    insights: [
      { value: 45, prefix: "", suffix: "%", label: "Optimal Discount Sweet Spot" },
      { value: 4.3, prefix: "", suffix: "★", label: "Avg High-Volume Brand Rating" },
      { value: 50, prefix: "", suffix: "k+", label: "SKUs Evaluated in Catalog" }
    ]
  }
];

function getDrivePreviewUrl(url) {
  if (!url) return "#";
  if (url.includes("/preview")) return url;
  return url.replace(/\/view(\?.*)?$/, "/preview");
}

// Ensure global attachment for browser script tags
if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
  window.getDrivePreviewUrl = getDrivePreviewUrl;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROJECTS_DATA, getDrivePreviewUrl };
}
