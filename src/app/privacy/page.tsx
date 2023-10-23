function Page() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1>Privacy Policy</h1>
        <br />
        <ul className="list-disc">
          <li>Information We Collect: We collect your profile picture, uId, and display name to enable the chat functionality.</li>
          <li>How We Use Your Information: Your profile information is used for messaging within the app.</li>
          <li>Data Security: We take measures to protect your data from unauthorized access and misuse.</li>
          <li>Data Retention: We retain your messages for chat functionality but do not share this data with third parties.</li>
          <li>Age Restrictions: Users must be at least 13 years old to use RonyChat.</li>
          <li>Changes to Privacy Policy: We may update our privacy policy; any changes will be posted on our platform.</li>
          <li>Contact Us: If you have questions or concerns, please reach out to us.</li>
        </ul>
      </div>
    </main>
  )
}

export default Page;