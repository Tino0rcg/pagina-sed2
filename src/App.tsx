import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-slate-900">Insurance Broker</h1>
          <p className="text-slate-600 mt-2">Your trusted partner for insurance solutions</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Life Insurance</h2>
            <p className="text-slate-600">Protect your loved ones with comprehensive life insurance coverage.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Auto Insurance</h2>
            <p className="text-slate-600">Get the best rates for your vehicle insurance needs.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Home Insurance</h2>
            <p className="text-slate-600">Safeguard your home and belongings with our policies.</p>
          </div>
        </div>
      </main>

      <ChatBot />
    </div>
  );
}

export default App;
