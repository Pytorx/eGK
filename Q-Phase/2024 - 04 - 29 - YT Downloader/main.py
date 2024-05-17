import streamlit as st
import pytube

# Titel der App
st.title("YouTube Video Downloader")

# Eingabe des Video-Links
video_url = st.text_input("YouTube Video-Link eingeben:")

# Auswahl der Auflösung
resolutions = ["720p", "480p", "360p", "240p"]
selected_resolution = st.selectbox("Auflösung auswählen:", resolutions)

# Eingabe des Dateinamens
filename = st.text_input("Dateiname angeben:")

# Download-Button
if st.button("Herunterladen"):
    try:
        # Herunterladen des Videos
        yt = pytube.YouTube(video_url)
        stream = yt.streams.filter(res=selected_resolution).first()
        stream.download(filename=filename)

        # Anzeigen von Erfolgsmeldung
        st.success("Video erfolgreich heruntergeladen!")

    except Exception as e:
        # Anzeigen von Fehlermeldung
        st.error("Fehler beim Herunterladen des Videos:", e)

# Abrufen von Videometadaten
if video_url:
    try:
        yt = pytube.YouTube(video_url)
        video_title = yt.title
        video_description = yt.description
        channel_title = yt.channel_title
        video_length = yt.length_seconds
        video_views = yt.views
        publish_date = yt.publish_date

        # Anzeigen von Videometadaten
        st.image(yt.thumbnail_url)
        st.write(f"**Titel:** {video_title}")
        st.write(f"**Beschreibung:** {video_description}")
        st.write(f"**Kanal:** {channel_title}")
        st.write(f"**Länge:** {video_length} Sekunden")
        st.write(f"**Aufrufe:** {video_views}")
        st.write(f"**Veröffentlichungsdatum:** {publish_date}")

    except Exception as e:
        st.error("Fehler beim Abrufen von Videometadaten:", e)
