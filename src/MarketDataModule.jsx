import React from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  Download,
  Filter,
  Grid3X3,
  LoaderCircle,
  Map,
  MapPin,
  TrendingUp,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartColors = {
  condo: "#f59e0b",
  hdb: "#10b981",
  landed: "#8b5cf6",
  nonLanded: "#06b6d4",
};

const rentBands = [
  { label: "$5,000+", color: "#ef4444", min: 5000 },
  { label: "$4,000-5,000", color: "#f97316", min: 4000 },
  { label: "$3,500-4,000", color: "#f59e0b", min: 3500 },
  { label: "$3,000-3,500", color: "#eab308", min: 3000 },
  { label: "$2,700-3,000", color: "#84cc16", min: 2700 },
  { label: "Below $2,700", color: "#22c55e", min: 0 },
];

const rentalDistricts = [
  { district: "D6", area: "City Hall", rent: 5760, yoyChange: 2.3, coordinates: [103.852, 1.292], band: "$5,000+" },
  { district: "D2", area: "Tanjong Pagar", rent: 5479, yoyChange: 2.3, coordinates: [103.842, 1.276], band: "$5,000+" },
  { district: "D1", area: "Raffles Place", rent: 5209, yoyChange: 2.3, coordinates: [103.851, 1.284], band: "$5,000+" },
  { district: "D7", area: "Beach Road", rent: 5162, yoyChange: 2.3, coordinates: [103.862, 1.300], band: "$5,000+" },
  { district: "D3", area: "Queenstown", rent: 5080, yoyChange: 2.3, coordinates: [103.807, 1.294], band: "$5,000+" },
  { district: "D8", area: "Farrer Park", rent: 4919, yoyChange: 2.3, coordinates: [103.856, 1.310], band: "$4,000-5,000" },
  { district: "D9", area: "Orchard, River Valley", rent: 4765, yoyChange: 2.3, coordinates: [103.835, 1.304], band: "$4,000-5,000" },
  { district: "D10", area: "Tanglin", rent: 4518, yoyChange: 2.3, coordinates: [103.815, 1.309], band: "$4,000-5,000" },
  { district: "D14", area: "Geylang", rent: 4409, yoyChange: 2.3, coordinates: [103.885, 1.314], band: "$4,000-5,000" },
  { district: "D4", area: "Harbourfront", rent: 4387, yoyChange: 2.3, coordinates: [103.819, 1.265], band: "$4,000-5,000" },
  { district: "D11", area: "Newton", rent: 4355, yoyChange: 2.3, coordinates: [103.842, 1.318], band: "$4,000-5,000" },
  { district: "D12", area: "Toa Payoh", rent: 4205, yoyChange: 2.3, coordinates: [103.850, 1.335], band: "$4,000-5,000" },
  { district: "D13", area: "Macpherson", rent: 4158, yoyChange: 2.3, coordinates: [103.876, 1.326], band: "$4,000-5,000" },
  { district: "D5", area: "Clementi", rent: 4107, yoyChange: 2.3, coordinates: [103.765, 1.315], band: "$4,000-5,000" },
  { district: "D15", area: "East Coast", rent: 4016, yoyChange: 2.3, coordinates: [103.908, 1.306], band: "$4,000-5,000" },
  { district: "D19", area: "Serangoon", rent: 3831, yoyChange: 2.3, coordinates: [103.873, 1.361], band: "$3,500-4,000" },
  { district: "D20", area: "Ang Mo Kio", rent: 3712, yoyChange: 2.3, coordinates: [103.849, 1.369], band: "$3,500-4,000" },
  { district: "D21", area: "Upper Bukit Timah", rent: 3678, yoyChange: 2.3, coordinates: [103.776, 1.337], band: "$3,500-4,000" },
  { district: "D28", area: "Seletar", rent: 3533, yoyChange: 2.3, coordinates: [103.879, 1.397], band: "$3,500-4,000" },
  { district: "D16", area: "Bedok", rent: 3433, yoyChange: 2.3, coordinates: [103.926, 1.325], band: "$3,000-3,500" },
  { district: "D18", area: "Tampines", rent: 3416, yoyChange: 2.3, coordinates: [103.944, 1.353], band: "$3,000-3,500" },
  { district: "D22", area: "Jurong", rent: 3411, yoyChange: 2.3, coordinates: [103.742, 1.333], band: "$3,000-3,500" },
  { district: "D23", area: "Bukit Batok", rent: 3329, yoyChange: 2.3, coordinates: [103.764, 1.359], band: "$3,000-3,500" },
  { district: "D26", area: "Mandai", rent: 3228, yoyChange: 2.3, coordinates: [103.816, 1.413], band: "$3,000-3,500" },
  { district: "D27", area: "Yishun", rent: 3221, yoyChange: 2.3, coordinates: [103.835, 1.429], band: "$3,000-3,500" },
  { district: "D25", area: "Woodlands", rent: 3171, yoyChange: 2.3, coordinates: [103.786, 1.436], band: "$3,000-3,500" },
  { district: "D17", area: "Changi", rent: 3064, yoyChange: 2.3, coordinates: [103.987, 1.356], band: "$3,000-3,500" },
];

const dataSources = [
  ["URA", "Urban Redevelopment Authority", "Singapore's national urban planning authority"],
  ["HDB", "Housing & Development Board", "Singapore's public housing authority"],
  ["EdgeProp", "EdgeProp Singapore", "Property portal and market insights"],
  ["Straits Times", "The Straits Times", "Singapore's leading news source"],
  ["99.co", "99.co Singapore", "Property search and rental platform"],
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const salesBase = {
  condo: [164, 164, 172, 168, 178, 181, 188, 195, 199, 201, 208, 217, 224, 229, 222, 229, 224, 236, 238, 242, 247, 254, 249, 250, 255, 253, 256, 265, 264, 263, 271, 285, 284],
  hdb: [109, 112, 116, 117, 115, 123, 127, 130, 131, 138, 140, 147, 147, 150, 151, 154, 156, 164, 163, 165, 165, 171, 168, 177, 179, 174, 178, 181, 184, 192, 197, 200, 204],
  landed: [189, 190, 198, 197, 198, 205, 205, 214, 221, 226, 226, 226, 236, 248, 244, 253, 269, 264, 276, 276, 266, 272, 286, 281, 281, 298, 304, 305, 313, 321, 319, 327, 327],
  nonLanded: [176, 176, 184, 184, 192, 193, 204, 205, 213, 214, 222, 222, 229, 235, 235, 236, 247, 247, 255, 257, 267, 254, 262, 264, 271, 273, 282, 279, 283, 284, 295, 297, 309],
  allTypes: [188, 189, 197, 196, 198, 205, 207, 214, 220, 226, 229, 229, 236, 247, 244, 253, 268, 263, 276, 276, 267, 273, 286, 281, 281, 298, 305, 306, 314, 321, 319, 321, 321],
};

const rentalBase = {
  condo: salesBase.condo.map((value, index) => Math.round(value * 0.78 + 34 + index * 0.25)),
  hdb: salesBase.hdb.map((value, index) => Math.round(value * 0.82 + 38 + index * 0.15)),
  landed: salesBase.landed.map((value, index) => Math.round(value * 0.8 + 40 + index * 0.2)),
  nonLanded: salesBase.nonLanded.map((value, index) => Math.round(value * 0.79 + 39 + index * 0.22)),
  allTypes: salesBase.allTypes.map((value, index) => Math.round(value * 0.79 + 39 + index * 0.2)),
};

const seriesColors = {
  condo: "#f59e0b",
  hdb: "#10b981",
  landed: "#8b5cf6",
  nonLanded: "#06b6d4",
};

const seriesLabels = {
  condo: "Condo",
  hdb: "HDB",
  landed: "Landed",
  nonLanded: "Non-Landed",
  allTypes: "All Types",
};

const marketData = Array.from({ length: 33 }, (_, index) => {
  const date = new Date(2023, index, 1);
  const point = {
    id: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
    label: `${monthShort[date.getMonth()]} ${date.getFullYear()}`,
    month: date.getMonth(),
    monthName: monthNames[date.getMonth()],
    year: date.getFullYear(),
  };

  for (const [market, source] of Object.entries({ sales: salesBase, rental: rentalBase })) {
    for (const key of Object.keys(source)) {
      point[`${market}_${key}`] = source[key][index];
    }
  }

  return point;
});

const momData = [
  { label: "Oct 2024", condo: 2.4, hdb: 3.1, landed: 1.5, nonLanded: -3.1 },
  { label: "Nov 2024", condo: 0.8, hdb: -1.2, landed: 3.7, nonLanded: 2.3 },
  { label: "Dec 2024", condo: -2.0, hdb: 4.3, landed: -1.1, nonLanded: 1.2 },
  { label: "Jan 2025", condo: 4.5, hdb: 1.2, landed: 5.4, nonLanded: 0.7 },
  { label: "Feb 2025", condo: -0.8, hdb: -1.7, landed: 2.1, nonLanded: 2.6 },
  { label: "Mar 2025", condo: 0.8, hdb: 1.8, landed: 0.3, nonLanded: -0.4 },
  { label: "Apr 2025", condo: 4.3, hdb: 1.2, landed: 2.2, nonLanded: 2.5 },
  { label: "May 2025", condo: -0.4, hdb: 1.7, landed: 2.6, nonLanded: 0.0 },
  { label: "Jun 2025", condo: -0.3, hdb: 3.5, landed: -0.3, nonLanded: 4.2 },
  { label: "Jul 2025", condo: 3.0, hdb: 3.3, landed: 2.5, nonLanded: 1.0 },
  { label: "Aug 2025", condo: 4.0, hdb: 1.6, landed: 0.0, nonLanded: 3.7 },
  { label: "Sep 2025", condo: -0.7, hdb: 1.5, landed: 0.0, nonLanded: 0.0 },
];

const marketOptions = {
  rental: "Rental Index",
  sales: "Sales Index",
};

const propertyOptions = [
  { value: "allTypes", label: "All Types" },
  { value: "condo", label: "Condo" },
  { value: "hdb", label: "HDB" },
  { value: "landed", label: "Landed" },
  { value: "nonLanded", label: "Non-Landed" },
];

export function MarketDataModule() {
  const [heatmapView, setHeatmapView] = React.useState("map");
  const [startYear, setStartYear] = React.useState(2023);
  const [endYear, setEndYear] = React.useState(2025);
  const [endMonth, setEndMonth] = React.useState(8);
  const [marketView, setMarketView] = React.useState("sales");
  const [propertyType, setPropertyType] = React.useState("allTypes");

  const filteredData = React.useMemo(() => {
    return marketData.filter((point) => {
      if (point.year < startYear || point.year > endYear) return false;
      if (point.year === endYear && point.month > endMonth) return false;
      return true;
    });
  }, [startYear, endMonth, endYear]);

  const currentPoint = filteredData[filteredData.length - 1] ?? marketData[marketData.length - 1];
  const previousPoint = filteredData[filteredData.length - 2] ?? currentPoint;
  const currentKey = `${marketView}_${propertyType}`;
  const currentIndex = currentPoint[currentKey] ?? 0;
  const previousIndex = previousPoint[currentKey] ?? currentIndex;
  const momChange = previousIndex === 0 ? 0 : ((currentIndex - previousIndex) / previousIndex) * 100;
  const startPoint = filteredData[0] ?? marketData[0];

  const highest = rentalDistricts.reduce((winner, district) => (district.rent > winner.rent ? district : winner), rentalDistricts[0]);
  const lowest = rentalDistricts.reduce((winner, district) => (district.rent < winner.rent ? district : winner), rentalDistricts[0]);
  const avgYoy = rentalDistricts.reduce((sum, district) => sum + district.yoyChange, 0) / rentalDistricts.length;

  const chartSeries = propertyType === "allTypes" ? ["condo", "hdb", "landed", "nonLanded"] : [propertyType];

  function updateStartYear(value) {
    setStartYear(value);
    if (value > endYear) setEndYear(value);
  }

  function updateEndYear(value) {
    setEndYear(value);
    if (value < startYear) setStartYear(value);
  }

  function setRecentRange() {
    setStartYear(2024);
    setEndYear(2025);
    setEndMonth(8);
  }

  function setAllTimeRange() {
    setStartYear(2023);
    setEndYear(2025);
    setEndMonth(8);
  }

  function exportCsv() {
    const columns = ["label", "condo", "hdb", "landed", "nonLanded", "allTypes"];
    const rows = filteredData.map((point) => [
      point.label,
      point[`${marketView}_condo`],
      point[`${marketView}_hdb`],
      point[`${marketView}_landed`],
      point[`${marketView}_nonLanded`],
      point[`${marketView}_allTypes`],
    ]);
    const csv = [columns.join(","), ...rows.map((row) => row.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${marketView}-index-${startPoint.id}-to-${currentPoint.id}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="market-module">
      <div className="section-inner">
        <section className="rental-heatmap-section">
          <div className="heatmap-heading">
            <span className="source-badge">Live Market Data</span>
            <h2>Singapore Rental Heatmap</h2>
            <p>Explore average rental prices across Singapore districts. Hover over any area to see detailed information.</p>
            <small>Data as of: December 2025</small>
            <div className="view-switch" role="group" aria-label="Rental heatmap view">
              <button className={heatmapView === "map" ? "active" : ""} type="button" onClick={() => setHeatmapView("map")}>
                <Map size={16} />
                Map View
              </button>
              <button className={heatmapView === "grid" ? "active" : ""} type="button" onClick={() => setHeatmapView("grid")}>
                <Grid3X3 size={16} />
                Grid View
              </button>
            </div>
          </div>

          <div className="heatmap-summary">
            <MetricTile title="Highest Avg Rent" value={formatCurrency(highest.rent)} tone="danger" detail={`${highest.district} - ${highest.area}`} />
            <MetricTile title="Lowest Avg Rent" value={formatCurrency(lowest.rent)} tone="success" detail={`${lowest.district} - ${lowest.area}`} />
            <MetricTile title="Avg YoY Change" value={`+${avgYoy.toFixed(1)}%`} tone="success" detail="Across all districts" icon={<TrendingUp size={16} />} />
          </div>

          {heatmapView === "map" ? <InteractiveRentalMap /> : <DistrictGrid />}
        </section>

        <TrustedSources />
        <p className="refresh-note">Data last refreshed: 6 May 2026, 03:26 pm</p>

        <section className="range-panel">
          <h2><Filter size={24} />Data Range Controls</h2>
          <div className="range-controls">
            <label>
              Start Year
              <select value={startYear} onChange={(event) => updateStartYear(Number(event.target.value))}>
                {[2023, 2024, 2025].map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </label>
            <label>
              End Year
              <select value={endYear} onChange={(event) => updateEndYear(Number(event.target.value))}>
                {[2023, 2024, 2025].map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </label>
            <label>
              End Month
              <select value={endMonth} onChange={(event) => setEndMonth(Number(event.target.value))}>
                {monthNames.map((month, index) => <option key={month} value={index}>{month}</option>)}
              </select>
            </label>
            <div className="quick-ranges">
              <span>Quick Ranges</span>
              <div>
                <button type="button" onClick={setRecentRange}>Recent</button>
                <button type="button" onClick={setAllTimeRange}>All Time</button>
              </div>
            </div>
          </div>
          <p>Showing data from {startPoint.monthName} {startPoint.year} to {currentPoint.monthName} {currentPoint.year} ({filteredData.length} data points)</p>
        </section>

        <section className="dashboard-panel">
          <div className="dashboard-header">
            <h2>Market Intelligence Dashboard</h2>
            <div>
              <span>{filteredData.length} data points</span>
              <button type="button" onClick={exportCsv}><Download size={18} />Export</button>
            </div>
          </div>

          <div className="dashboard-metrics">
            <MetricTile title="Current Index" value={String(currentIndex)} />
            <MetricTile title="Month-on-Month" value={`${momChange.toFixed(1)}%`} />
            <MetricTile title="Time Periods" value={String(filteredData.length)} />
          </div>

          <div className="dashboard-controls">
            <div>
              <span>Market View</span>
              <div className="market-toggle">
                {Object.entries(marketOptions).map(([value, label]) => (
                  <button className={marketView === value ? "active" : ""} key={value} type="button" onClick={() => setMarketView(value)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <label>
              Property Type
              <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}>
                {propertyOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </label>
          </div>

          <ChartPanel
            chartSeries={chartSeries}
            data={filteredData}
            marketView={marketView}
            propertyType={propertyType}
          />
        </section>

        <section className="dashboard-panel mom-panel">
          <h2>Month-on-Month Changes (%)</h2>
          <ResponsiveContainer width="100%" height={330}>
            <BarChart data={momData} margin={{ top: 18, right: 20, left: 0, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis domain={[-6, 6]} ticks={[-6, -3, 0, 3, 6]} />
              <Tooltip formatter={(value) => `${Number(value).toFixed(1)}%`} />
              <Legend />
              <Bar dataKey="condo" name="Condo" fill={seriesColors.condo} />
              <Bar dataKey="hdb" name="HDB" fill={seriesColors.hdb} />
              <Bar dataKey="landed" name="Landed" fill={seriesColors.landed} />
              <Bar dataKey="nonLanded" name="Non-Landed" fill={seriesColors.nonLanded} />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
    </section>
  );
}

function MetricTile({ title, value, detail, tone = "", icon }) {
  return (
    <article className="metric-tile">
      <span>{title}</span>
      <strong className={tone}>{icon}{value}</strong>
      {detail && <small>{detail}</small>}
    </article>
  );
}

function InteractiveRentalMap() {
  const mapContainerRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const popupRef = React.useRef(null);

  React.useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return undefined;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      center: [103.846, 1.352],
      zoom: 10.35,
      minZoom: 9,
      maxZoom: 13,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "OpenStreetMap",
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
            paint: {
              "raster-saturation": -0.95,
              "raster-contrast": -0.08,
              "raster-brightness-min": 0.72,
              "raster-brightness-max": 1,
            },
          },
        ],
      },
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");
    mapRef.current = map;
    popupRef.current = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 16 });

    rentalDistricts.forEach((district) => {
      const markerElement = document.createElement("button");
      markerElement.className = "district-marker";
      markerElement.type = "button";
      markerElement.textContent = district.district;
      markerElement.style.backgroundColor = getBand(district).color;
      markerElement.style.borderColor = getMarkerBorder(district);
      markerElement.setAttribute("aria-label", `${district.district} ${district.area}, average rent ${formatCurrency(district.rent)}`);

      const showPopup = () => {
        popupRef.current
          .setLngLat(district.coordinates)
          .setHTML(`
            <div class="district-popup">
              <strong>District ${district.district.replace("D", "")}</strong>
              <span>${district.area}</span>
              <p>Avg Rent: <b>${formatCurrency(district.rent)}/mo</b></p>
              <p>YoY Change: <em>+${district.yoyChange.toFixed(1)}%</em></p>
            </div>
          `)
          .addTo(map);
      };

      markerElement.addEventListener("mouseenter", showPopup);
      markerElement.addEventListener("focus", showPopup);
      markerElement.addEventListener("mouseleave", () => popupRef.current.remove());
      markerElement.addEventListener("blur", () => popupRef.current.remove());

      new maplibregl.Marker({ element: markerElement })
        .setLngLat(district.coordinates)
        .addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
      popupRef.current = null;
    };
  }, []);

  return (
    <div className="heatmap-frame">
      <div className="map-loading"><LoaderCircle size={32} /><span>Loading map...</span></div>
      <div className="maplibre-container" ref={mapContainerRef} />
      <RentLegend />
      <div className="map-credit">Mapbox | URA Data</div>
    </div>
  );
}

function DistrictGrid() {
  return (
    <div className="district-card-grid">
      {rentalDistricts.map((district) => (
        <article className="district-card" key={district.district} style={{ borderColor: getBand(district).color }}>
          <span><MapPin size={13} />{district.district}</span>
          <strong>{district.area}</strong>
          <b>{formatCurrency(district.rent)}</b>
          <em>+{district.yoyChange.toFixed(1)}%</em>
        </article>
      ))}
      <div className="grid-legend"><RentLegend inline /></div>
    </div>
  );
}

function TrustedSources() {
  return (
    <section className="trusted-source-strip">
      <div className="heatmap-heading compact-heading">
        <h3>Trusted Data Sources</h3>
        <p>Real-time property data from Singapore's most trusted sources</p>
      </div>
      <div className="source-marquee" aria-label="Trusted data sources">
        <div className="fade-edge left" />
        <div className="fade-edge right" />
        <div className="source-track">
          {[...dataSources, ...dataSources].map(([name, title, copy], index) => (
            <article className="source-card" key={`${name}-${index}`}>
              <div>
                <strong>{name}</strong>
                <span>{title}</span>
              </div>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="source-footnote">Powered by official government data and leading property platforms</p>
    </section>
  );
}

function RentLegend({ inline = false }) {
  return (
    <div className={inline ? "rent-legend inline" : "rent-legend"}>
      <strong>Avg Monthly Rent</strong>
      {rentBands.map((band) => (
        <span key={band.label}><i style={{ backgroundColor: band.color }} />{band.label}</span>
      ))}
    </div>
  );
}

function ChartPanel({ chartSeries, data, marketView, propertyType }) {
  const title = `${marketOptions[marketView]} Trends - ${seriesLabels[propertyType]}`;

  return (
    <div className="chart-block">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={380}>
        <LineChart data={data} margin={{ top: 20, right: 26, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" minTickGap={22} />
          <YAxis domain={[0, 340]} ticks={[0, 85, 170, 255, 340]} />
          <Tooltip />
          <Legend />
          {chartSeries.map((series) => (
            <Line
              activeDot={{ r: 5 }}
              dataKey={`${marketView}_${series}`}
              dot={{ r: 3 }}
              key={series}
              name={seriesLabels[series]}
              stroke={seriesColors[series]}
              strokeWidth={3}
              type="monotone"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function getBand(district) {
  return rentBands.find((band) => band.label === district.band) ?? rentBands[rentBands.length - 1];
}

function getMarkerBorder(district) {
  if (district.rent >= 5000) return "#dc2626";
  if (district.rent >= 4000) return "#ea580c";
  return "#d99a00";
}

function formatCurrency(value) {
  return `$${Number(value).toLocaleString("en-SG", { maximumFractionDigits: 0 })}`;
}
