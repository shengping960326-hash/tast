export default function Page413() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-8 w-2 bg-purple-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-900">4/13</h2>
      </div>
      
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600" 
              alt="4/13 Activity" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">3D 模型建置與展示</h3>
            <p className="text-slate-600 leading-relaxed">
              在這次的作品中，我嘗試使用了 3D 建模工具，將實體物件轉換為虛擬模型。下方是使用 Tripo3D 平台所生成的模型連結，您可以點擊進入並在瀏覽器中直接與模型進行互動。
            </p>
            
            <a 
              href="https://studio.tripo3d.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:border-purple-300 hover:shadow-md transition-all group">
                <span className="text-purple-600 font-mono text-sm break-all group-hover:text-purple-700">
                  https://studio.tripo3d.ai/3d-model/xxxxx...
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
