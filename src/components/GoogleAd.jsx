import { useEffect } from "react";

const GoogleAd = ({
  clientId = "ca-pub-XXXXXXXXXXXXXXXX",
  slot = "1234567890",
  format = "auto",
  fullWidthResponsive = true,
  className = "",
}) => {
  const isDemo = !clientId || clientId.includes("X");

  useEffect(() => {
    if (isDemo) return;

    const scriptId = "google-adsense-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    const pushAd = () => {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    };

    const timeoutId = setTimeout(pushAd, 300);
    return () => clearTimeout(timeoutId);
  }, [clientId, isDemo]);

  return (
    <div
      className={`rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-4 shadow-sm ${className}`}
    >
      <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-700">
        <span>Advertisement</span>
        <span className="rounded-full border border-amber-200 bg-amber-100 px-2 py-1 text-[9px] text-amber-700">
          {isDemo ? "Demo" : "Live"}
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-amber-200 bg-white shadow-inner">
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            minHeight: "120px",
            width: "100%",
          }}
          data-ad-client={clientId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
        />
      </div>

      {isDemo && (
        <p className="mt-2 text-[11px] text-amber-700">
          Replace the demo values in this component with your real AdSense client
          ID and ad slot before publishing.
        </p>
      )}
    </div>
  );
};

export default GoogleAd;
