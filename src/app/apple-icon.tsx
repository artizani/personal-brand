import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundColor: '#09090b',
          color: '#ffffff',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>DS</div>
        <div
          style={{
            position: 'absolute',
            top: 28,
            right: 28,
            width: 22,
            height: 22,
            borderRadius: 5,
            backgroundColor: '#f59e0b',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
