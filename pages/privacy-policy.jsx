import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function PrivacyPolicyPage() {
 return (
 <>
 <PageProgress />
 <Head>
 <title>Privacy Policy - Poshak Tattva</title>
 <meta name="description" content="Privacy Policy for Poshak Tattva." />
 </Head>

 <main className="content-wrapper">
 <section className="wrapper bg-light py-16">
 <div className="container">
 <div className="text-center">
 <h1 className="display-4 fw-bold mb-4">Privacy Policy</h1>
 <p className="lead ">Last updated: {new Date().toLocaleDateString()}</p>
 </div>
 </div>
 </section>

 <section className="wrapper py-16">
 <div className="container">
 <div className="row">
 <div className="col-lg-10 mx-auto">
 <div className="card shadow-sm border-0 p-8">
 <h3 className="h4 fw-bold mb-4">1. Information We Collect</h3>
 <p className=" mb-6">
 We collect information you provide directly to us when you book a consultation, sign up for our newsletter, or communicate with us.
 </p>

 <h3 className="h4 fw-bold mb-4">2. How We Use Your Information</h3>
 <p className=" mb-6">
 We use the information we collect to provide, maintain, and improve our services, to process your requests/transactions, and to communicate with you.
 </p>

 <h3 className="h4 fw-bold mb-4">3. Information Sharing</h3>
 <p className=" mb-6">
 We do not share your personal information with third parties except as described in this privacy policy or with your consent.
 </p>

 <h3 className="h4 fw-bold mb-4">4. Contact Us</h3>
 <p className="">
 If you have any questions about this Privacy Policy, please contact us at poshaktattva@gmail.com.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 </>
 );
}
