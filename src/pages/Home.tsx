import { Mail, Instagram, Facebook, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-12 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-xl"
        >
          {/* Avatar placeholder with actual style from video, but we use a reliable placeholder */}
          <img 
            src="/avatar.jpg" 
            alt="Andrew profile" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 space-y-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
              張勝評 Andrew
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              顧客關係管理 | 顧客體驗優化 | 賽特主理人
            </p>
            <p className="text-sm text-slate-500 mt-2 flex items-center gap-2">
              <span>牡羊座 | O型 | 2003-03-26</span>
            </p>
            <a href="mailto:shengping960326@gmail.com" className="text-blue-600 hover:underline text-sm font-medium mt-1 block">
              shengping960326@gmail.com
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
              <Github size={20} />
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-slate-700 leading-relaxed max-w-3xl">
            我是張勝評來自高科大航海科五專四年級的學生，從小因家人工作影響便對船舶與大海有濃厚的興趣。因此選擇就讀航海科，並希望能在未來成為一名優秀的航海人員。
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-2 bg-blue-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">打工經驗</h2>
        </div>
        
        <div className="space-y-8 pl-6 border-l w-full max-w-4xl border-slate-200 ml-3">
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-blue-500"></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="mb-4">
                <span className="text-sm font-semibold text-blue-600 tracking-wider">2025-03 ~ 2025-07</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">候位室內場</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>負責餐點、食材處理與餐點製作</li>
                <li>清點食材庫存</li>
                <li>打洗菜、切菜、麵製等前置作業,確保尖峰時段能順利出餐。營業時間內,依照單點內容製作好成品</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-blue-500"></div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="mb-4">
                <span className="text-sm font-semibold text-blue-600 tracking-wider">2025-09 ~ 現在</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">7-11店員</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>擔任門市人員,主要工作內容包括收銀結帳、協助顧客服務與商品管理。</li>
                <li>平時負責操作收銀機、代收繳費、儲值與兌換等服務,並協助顧客查詢商品或解決問題。</li>
                <li>負責補貨上架、整理排面、盤點商品狀況,確保賣場整齊與商品充足。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Assignments Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-2 bg-emerald-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">作業</h2>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 max-w-4xl">
          <h3 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-6">高雄出發：花東四人行「極簡預算版」</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative pl-4 border-l-2 border-emerald-200">
                <h4 className="font-bold text-slate-800 mb-2">Day 1: 台東市區 (耍廢開端)</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li><span className="font-medium text-slate-800">出發:</span> 高雄 09:00 出發 (南迴公路悠閒開)。</li>
                  <li><span className="font-medium text-slate-800">下午:</span> 抵達台東市區，找小吃果腹，逛活水湖、森林公園。</li>
                  <li><span className="font-medium text-slate-800">晚上:</span> 鐵花村散步，回背包客棧休息。</li>
                  <li className="text-emerald-600 mt-2 font-medium">✨ 預算: 約 $3,000 /人 (含交通分攤、住宿、簡單餐飲)</li>
                </ul>
              </div>

              <div className="relative pl-4 border-l-2 border-emerald-200">
                <h4 className="font-bold text-slate-800 mb-2">Day 2: 縱谷漫遊 (看海放空)</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li><span className="font-medium text-slate-800">上午:</span> 鹿野高台看風景(若有熱氣球可看)。</li>
                  <li><span className="font-medium text-slate-800">中午:</span> 池上吃便當、租單車遊伯朗大道。</li>
                  <li><span className="font-medium text-slate-800">下午:</span> 沿台九線往北，抵達玉里吃麵。</li>
                  <li className="text-emerald-600 mt-2 font-medium">✨ 預算: 約 $3,000 /人</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-4 border-l-2 border-emerald-200">
                <h4 className="font-bold text-slate-800 mb-2">Day 3: 海線花蓮 (看海放空)</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li><span className="font-medium text-slate-800">上午:</span> 走玉長公路接台11線，沿海線北上。</li>
                  <li><span className="font-medium text-slate-800">下午:</span> 沿途海景咖啡廳放空(如：項鍊海岸)，拍美照。</li>
                  <li><span className="font-medium text-slate-800">晚上:</span> 花蓮市區吃晚餐，回市區背包客棧。</li>
                  <li className="text-emerald-600 mt-2 font-medium">✨ 預算: 約 $3,000 /人</li>
                </ul>
              </div>

              <div className="relative pl-4 border-l-2 border-emerald-200">
                <h4 className="font-bold text-slate-800 mb-2">Day 4: 慢悠南返 (採買收心)</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li><span className="font-medium text-slate-800">上午:</span> 享用花蓮早餐。</li>
                  <li><span className="font-medium text-slate-800">中午:</span> 沿海線南下或縱谷南下，買伴手禮。</li>
                  <li><span className="font-medium text-slate-800">下午:</span> 穩穩開車回高雄，結束行程。</li>
                  <li className="text-emerald-600 mt-2 font-medium">✨ 預算: 約 $3,500 /人</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-2 bg-purple-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">學歷</h2>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 max-w-4xl flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">國立高雄科技大學</h3>
            <p className="text-slate-600 mt-1">航海科 五專</p>
          </div>
          <span className="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-bold">
            2020-07 ~ 2025-06
          </span>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-2 bg-orange-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">能力與技能</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {/* Language Skills */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b">語言能力</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="font-medium text-slate-700">英文</span>
                  <span className="text-xs text-slate-500">TOEIC 570</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 w-[57%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="font-medium text-slate-700">台語</span>
                  <span className="text-xs text-slate-500 truncate max-w-[120px]" title="聽得懂公司阿姨罵我無用啦">聽得懂公司阿姨罵我無用啦</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Skills */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b">專業技能</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span className="font-medium">顧客關係管理</span>
                <span className="text-xs text-slate-400 ml-auto">社群經營, 客服</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span className="font-medium">顧客體驗優化</span>
                <span className="text-xs text-slate-400 ml-auto">提升服務態度</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span className="font-medium">通路開發維護</span>
                <span className="text-xs text-slate-400 ml-auto">GA, Console</span>
              </li>
            </ul>
          </div>

          {/* Computer & Certificates */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b">電腦技能與專業證照</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-500 mb-2">Microsoft Office</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-slate-100 rounded text-xs text-slate-600 font-medium">Word</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded text-xs text-slate-600 font-medium">Excel</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded text-xs text-slate-600 font-medium">Outlook</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded text-xs text-slate-600 font-medium">PowerPoint</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-500 mb-2">專業證照</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-100 rounded text-xs font-medium">基礎滅火訓練</span>
                  <span className="px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-100 rounded text-xs font-medium">救生艇筏</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autobiography Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-2 bg-indigo-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">自傳</h2>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 max-w-4xl text-slate-700 leading-relaxed space-y-6">
          <p>
            我是張勝評，來自高科大航海科五專四年級的學生。從小因家人工作影響便對船舶與大海有濃厚的興趣，因此選擇就讀航海科，並希望能在未來成為一名優秀的航海人員。
          </p>
          <p>
            在學校裡，我曾擔任過代表及學會活動組組長。這段期間內學習專案規劃、營商活動協調，以提升溝通技巧。此外，我也培養了良好的紀律與團隊合作精神，深刻知道不僅是個人技能的展現，更是團隊間合作與共建的成果。
          </p>
          <p>
            除了課業，我也鼓勵自己跳脫舒適圈，尋找社會實踐。在實務經歷工作，我深刻體認到海事工作的扎實與心酸。我曾擔任過實習生，從學長姐身上學習到許多寶貴的經歷與建議，並在學校學習造船中不斷驗證自己的心性與抗壓能力。學會在艱困環境中保持冷靜與決策。在船上這緊密的生活中，能與來自不同國家的人溝通協作，這更是航海人員必備的質素與核心。
          </p>
          <p>
            未來，我希望能考取相關證照，投身於海運業，將所學應用於實務中。
          </p>

          <div className="pt-6 flex justify-center">
            <a href="mailto:shengping960326@gmail.com" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              <Mail size={18} />
              與我聯絡
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
