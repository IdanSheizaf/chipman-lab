import http.server
import socketserver
import os
import sys

# Ensure current working directory is always the script directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 8000

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent browser caching of HTML, JS, and media files during local runs
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

socketserver.TCPServer.allow_reuse_address = True

def run():
    try:
        with socketserver.TCPServer(("", PORT), NoCacheHTTPRequestHandler) as httpd:
            print(f"Server is active at http://localhost:{PORT}")
            print("Cache-Control disabled: Changes to data.js appear immediately on refresh.")
            print("Press Ctrl+C in this window to stop the server.\n")
            httpd.serve_forever()
    except OSError as e:
        if getattr(e, 'winerror', None) == 10048 or "10048" in str(e):
            print(f"\n[NOTE] Port {PORT} is already running in another window.")
            print(f"The website is active at http://localhost:{PORT}")
            print("To restart it cleanly, close any other open server windows.\n")
        else:
            raise e

if __name__ == '__main__':
    run()
