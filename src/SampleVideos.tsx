const samples = [
  {
    id: 1,
    title: 'Friends wave crash',
    mood: 'High energy · Modest Islamic dress · Sunglasses',
    blurb:
      'Indian friends waist-deep in the wave pool. Muslim women in full burkinis and hijabs with sunglasses, modest and joyful. Same clip as the homepage hero.',
    video: '/samples/option-1.mp4',
    poster: '/samples/option-1.jpg',
  },
  {
    id: 2,
    title: 'Golden family day',
    mood: 'Warm · Trustworthy',
    blurb:
      'Softer waves and golden light. Feels calm and family-friendly.',
    video: '/samples/option-2.mp4',
    poster: '/samples/option-2.jpg',
  },
  {
    id: 3,
    title: 'Cinematic wide splash',
    mood: 'Epic · Premium',
    blurb:
      'Wide park view with a busy wave pool. Makes the day feel big and beautiful.',
    video: '/samples/option-3.mp4',
    poster: '/samples/option-3.jpg',
  },
  {
    id: 4,
    title: 'Close joy reaction',
    mood: 'Emotional · Fancy',
    blurb:
      'Closer on a few people with water spray. Strong faces and splash detail.',
    video: '/samples/option-4.mp4',
    poster: '/samples/option-4.jpg',
  },
  {
    id: 5,
    title: 'Cinematic slide splash',
    mood: 'Movie style · Drone follow · 10s',
    blurb:
      'Kid flying out of a rainbow slide into a huge splash. Drone-style follow, water everywhere. Currently used on the homepage.',
    video: '/samples/option-5.mp4',
    poster: '/samples/option-5.jpg',
  },
]

type Props = {
  onBack: () => void
}

export default function SampleVideos({ onBack }: Props) {
  return (
    <div className="samples-page">
      <div className="samples-hero">
        <button type="button" className="samples-back" onClick={onBack}>
          ← Back to home
        </button>
        <p className="section-kicker">Pick a hero video</p>
        <h1>Sample videos</h1>
        <p className="samples-intro">
          Wave-pool options (1–4) plus a cinematic slide shot (5). Watch each
          loop, then tell us which number you like best for the homepage.
        </p>
      </div>

      <div className="samples-grid">
        {samples.map((item) => (
          <article key={item.id} className="sample-card" id={`option-${item.id}`}>
            <div className="sample-badge">Option {item.id}</div>
            <div className="sample-video-wrap">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                poster={item.poster}
                aria-label={`Sample video option ${item.id}: ${item.title}`}
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <div className="sample-body">
              <h2>{item.title}</h2>
              <p className="sample-mood">{item.mood}</p>
              <p>{item.blurb}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="samples-footer-note glass-panel">
        <h3>How to choose</h3>
        <p>
          Reply with the option number you like most — for example{' '}
          <strong>“Use option 3”</strong>. These are AI sample clips for style
          only. Real park video can replace them later.
        </p>
        <button type="button" className="btn btn-primary" onClick={onBack}>
          Back to home
        </button>
      </div>
    </div>
  )
}
