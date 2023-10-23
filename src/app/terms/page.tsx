function Page() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1>Terms of Service</h1>
        <br />
        <ul className="list-disc">
          <li>Usage: RonyChat is a chat application created by Rony for your messaging needs.</li>
          <li>Privacy: We use your profile picture, uId, and display name for messaging purposes only.</li>
          <li>User Conduct: Be respectful and use the app responsibly. No spamming, harassment, or harmful content.</li>
          <li>Data Usage: We store messages for chat functionality. Rest assured, your data is safe.</li>
          <li>Age Requirement: Users must be at least 13 years old to use RonyChat.</li>
          <li>Updates: We may update the app for improvements.</li>
          <li>Termination: We can suspend accounts for misuse.</li>
          <li>Feedback: We welcome your feedback for better user experience.</li>
          <li>Contact Us: Reach out if you have questions or issues.</li>
        </ul>
      </div>
    </main>
  )
}

export default Page;