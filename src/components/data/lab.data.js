const LAB_DATA = [
  {
    id: 1,
    moduleName: 'Web Application Access Exploitation',
    items: [
      {
        id: 1,
        title: 'Information Gathering',
        description:
          'Information gathering, on its most simplest term, is collecting information about something of interest. For example, when an attacker wants to target a website, it will look for information to exploit any vulnerabilities it may have (this may include IP addresses, nameservers, which hosting company is using, what tool stack was used to build the website, etc.',
        flag: ['151.101.1.69'],
      },
      {
        id: 2,
        title: 'Cross-Site Scripting (XSS)',
        description:
          'Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.',
        flag: ['050d5kbdg7q7necj37k9ftapf0'],
      },
      {
        id: 3,
        title: 'CSP Bypass',
        description:
          'Content-Security-Policy is the name of a HTTP response header that modern browsers use to enhance the security of the document (or web page). The Content-Security-Policy header allows you to restrict how resources such as JavaScript, CSS, or pretty much anything that the browser loads.',
        flag: ['password'],
      },
      {
        id: 4,
        title: 'SQL Injection',
        description:
          'SQL injection is a code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g. to dump the database contents to the attacker).',
        flag: ['charley'],
      },
    ],
  },
  {
    id: 2,
    moduleName: 'Binary Exploitation',
    items: [
      {
        id: 1,
        title: 'Buffer Overflow Intro',
        description:
          'This exercises aims to provide students with a light introduction to what is known as a "Buffer Overflow". Students are tasked with sending a specially crafted payload which will change one of the value of a variable within the source code through a buffer overflow.',
        flag: ['TAQfmG7z3MGn5CocViybbRLVcVPO0n3eO1RUYBVD+0kB'],
      },
      {
        id: 2,
        title: 'Buffer Overflow Code Redirection',
        description:
          'Through buffer overflows attackers can take advantage of a vulnerable program and force the machine to execute a reverse shell by redirecting the programs Program Counter. Students must implement the same methodologies to redirect the Programs Counter to another fucntion call.',
        flag: ['HiZ47sBcROYR+/9/bpk='],
      },
      {
        id: 3,
        title: 'Exploiting Format Strings',
        description:
          'This exercise introduces another attack vector, format strings. Without proper formatting attackers can craft specific payloads to steal information from the stack or to modify it. Students are tasked with modifying a variable within the stack through its format string vulnerability.',
        flag: ['VP2Ueg3w2j/Tpzy3uhhRAo9IwLIvDW8zS0nq80I6PbZz9wWhkBKZJQ=='],
      },
      {
        id: 4,
        title: 'Format String Code Redirection',
        description:
          "Format String exploits aren't limited to local variables. As with a Buffer Overflow an attacker can manipulate a programs registers, such as the Program Counter. Students are tasked with redirecting the program to the intended function through the manipulation of the programs registers.",
        flag: ['3zbSOd90yUYUpX5OuNZTuk9X4x1dYjRS+vZcoIgw61Ma'],
      },
    ],
  },
  {
    id: 3,
    moduleName: 'Password Cracking',
    items: [
      {
        id: 1,
        title: 'Hash Cracking Basics',
        description:
          "Technically, you don't crack a hash. You try different combinations of possible inputs until you match the hash you are searching for. Your possible inputs are called a wordlist dictionary.",
        flag: [
          'password',
          'password1',
          'Password1',
          'leannetogether4eva',
          'asugar1',
          'ximenax',
        ],
      },
      {
        id: 2,
        title: 'Ruleset Hash Cracking',
        description:
          'A rule-based password attack is a password cracking technique when an attacker is trying to guess possible permutations of a plaintext password. You will modify your wordlist dictionary using these rules. ',
        flag: [
          'aaliyah21',
          'manujust0wn6adly',
          'w4thinee1980',
          'bal+hier0601',
          'don+come',
          '+ekierolulu',
        ],
      },
      {
        id: 3,
        title: 'Salted Hashes',
        description:
          'Everything tastes better with salt! (allegedly). Adding salts to hashes increases their "security", by adding an extra layer of complexity.',
        flag: [
          'iloveqt1',
          'ROADNEWS05',
          'jakebauman',
          'stjohn1905',
          'boxeryorkie2',
          'GLENNIS1',
        ],
      },
      {
        id: 4,
        title: 'Salted Hashes with Ruleset',
        description:
          "Let's put to the test what you have learned from this section. Try cracking these hashes using your newly acquired skills.",
        flag: [
          'sisiliaaaaaasisiliaaaaaasisiliaaaaaasisiliaaaaaasisiliaaaaaa',
          'pisesuedepisesuedepisesuedepisesuedepisesuedepisesuede',
          'sisiliaRsisiliaRsisiliaRsisiliaR',
          'lisisialisisialisisialisisialisisialisisia',
          'siyeteeeeeesiyeteeeeeesiyeteeeeeesiyeteeeeeesiyeteeeeee',
          'siyeteRsiyeteRsiyeteRsiyeteR',
        ],
      },
    ],
  },
  {
    id: 4,
    moduleName: 'Network Mapping',
    items: [
      {
        id: 1,
        title: 'Network Scanning',
        description:
          'It refers to the gathering of information about computing systems or servers through the use of a particular computer network.',
        flag: ['5'],
      },
      {
        id: 2,
        title: 'Focused Network Scanning',
        description:
          'A more detailed and in depth approach to network scanning. Focusing more on one aspect of traffic and packages.',
        flag: ['65523'],
      },
      {
        id: 3,
        title: 'Vulnerability Scanning',
        description:
          'It refers to the analysis or inspection of vulnerable or potentially exploitable computer software, hardware, or network with the sole purpose of identifying security holes.',
        flag: ['Apache httpd 2.4.25 ((Debian))', 'Apache httpd 2.4.25'],
      },
      {
        id: 4,
        title: 'Network Visualization',
        description:
          'This special visualization is often used to visualize complex relationships between huge network systems.',
        flag: ['9'],
      },
    ],
  },
];

export default LAB_DATA;
