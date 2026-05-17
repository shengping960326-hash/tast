export default function Page316() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-8 w-2 bg-emerald-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-900">3/16 旅遊規劃簡報</h2>
      </div>
      
      <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-slate-100 max-w-5xl mx-auto">
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vQRg.../embed?start=false&loop=false&delayms=3000" 
            title="旅遊規劃簡報"
            className="w-full h-full"
            frameBorder="0" 
            allowFullScreen={true}
          ></iframe>
        </div>
        
        <div className="mt-8 space-y-4 text-slate-600">
          <h3 className="text-xl font-bold text-slate-900">高雄出發：花東四人行「極簡預算版」 深度放鬆企劃</h3>
          <p>
            規劃這趟旅程的初衷在於放鬆心情，因此交通與住宿選擇了高性價比的方案。
            我們將從高雄出發，一路沿著南迴公路前往台東，再沿著花東縱谷與海岸線感受大自然的美。
          </p>
        </div>
      </div>
    </div>
  );
}
