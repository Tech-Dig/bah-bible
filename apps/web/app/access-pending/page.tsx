export default function AccessPending() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bah-bg px-6">
      <div className="max-w-lg w-full bg-bah-panel border border-bah-line rounded-2xl p-6 shadow-soft">
        <div className="text-xl font-semibold">Access pending</div>
        <div className="text-bah-muted mt-2">
          Your account exists in Firebase Auth, but you are not yet approved in the BAH
          Bible system. Please ask a manager/admin to activate you.
        </div>
      </div>
    </div>
  );
}