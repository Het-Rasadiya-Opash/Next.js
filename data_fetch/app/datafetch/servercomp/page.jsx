import { User, Sparkles, Activity, CheckCircle2, AlertCircle } from "lucide-react";

const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;
  const username = searchParams.name;

  if (!username) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="relative group max-w-sm w-full">
          <div className="absolute -inset-1 bg-linear-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-20 transition duration-1000"></div>
          <div className="relative p-8 rounded-2xl border border-(--foreground)/10 bg-background shadow-2xl text-center flex flex-col items-center">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h1 className="text-xl font-bold text-foreground mb-2">No Name Provided</h1>
            <p className="text-(--foreground)/60 text-sm italic">
              Add <span className="text-blue-500 font-mono font-bold">?name=alex</span> to your URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  const response = await fetch(`https://api.genderize.io/?name=${username}`);
  const userData = await response.json();
  const isMale = userData.gender === "male";
  const confidence = (userData.probability * 100).toFixed(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F4F7FE] p-6">
      <div className="w-full max-w-sm bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 p-8 flex flex-col items-center">
        
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300 ${isMale ? 'bg-blue-500 shadow-blue-200' : 'bg-pink-500 shadow-pink-200'} shadow-lg`}>
          <User className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>

        <h2 className="text-2xl font-extrabold text-black capitalize mb-2">{userData.name}</h2>
        <div className={`px-4 py-1 rounded-full text-xs font-bold flex items-center gap-2 ${isMale ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${isMale ? 'bg-blue-500' : 'bg-pink-500'} animate-pulse`}></div>
          {userData.gender || "Unknown"}
        </div>

        <div className="w-full mt-10 space-y-6">
          <div>
            <div className="flex justify-between text-[13px] font-bold mb-3">
              <span className="text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" /> Confidence
              </span>
              <span className="text-black">{confidence}%</span>
            </div>
            <div className="h-2.5 w-full bg-zinc-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${isMale ? 'bg-blue-500' : 'bg-pink-500'}`}
                style={{ width: `${confidence}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between items-center py-4 border-y border-zinc-50">
            <span className="text-[13px] font-bold text-zinc-400 flex items-center gap-2">
              <Activity className="w-4 h-4 text-zinc-300" /> Data Sample Size
            </span>
            <span className="text-sm font-black text-black">{userData.count?.toLocaleString() || 0}</span>
          </div>

          <div className="w-full bg-emerald-50/60 rounded-2xl p-4 flex items-center gap-3 border border-emerald-100/50">
            <div className="bg-emerald-500 rounded-full p-1 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-bold text-emerald-700">High Accuracy Result</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFetchServer;
