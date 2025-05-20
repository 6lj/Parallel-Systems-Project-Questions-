const questions = [

            {
                question: "What is the definition of computer security according to NIST 1995?",
                options: [
                    "Protecting hardware only",
                    "Protection of an automated information system to maintain confidentiality, integrity, and availability",
                    "Preventing unauthorized access only",
                    "Securing communications only"
                ],
                correctAnswer: "b",
                definition: "Computer Security: The protection afforded to an automated information system in order to attain the applicable objectives of preserving the integrity, availability, and confidentiality of information system resources (includes hardware, software, firmware, information/data, and telecommunications).",
                page: 3,
                chapter: 1,
                explanation: "يُعرف أمن الحاسب وفقًا لـ NIST 1995 بأنه الحماية التي يتم توفيرها لنظام معلوماتي آلي لتحقيق أهداف الحفاظ على سرية وسلامة وتوافر موارد النظام، بما في ذلك الأجهزة، البرمجيات، البيانات، والاتصالات.",
                arabicTranslation: "ما هو تعريف أمن الحاسب وفقًا لـ NIST 1995؟"
            },
            {
                question: "What are the three key objectives of computer security (CIA triad)?",
                options: [
                    "Confidentiality, Performance, Availability",
                    "Confidentiality, Integrity, Availability",
                    "Performance, Integrity, Privacy",
                    "Availability, Performance, Privacy"
                ],
                correctAnswer: "b",
                definition: "Confidentiality – preserves authorized restrictions on information access and disclosure, including means for protecting personal privacy and proprietary information. Integrity – guard against improper information modification or destruction, and includes ensuring information non-repudiation and authenticity. Availability – ensures timely and reliable access to and use of information.",
                page: 7,
                chapter: 1,
                explanation: "ثلاثية CIA تتكون من السرية (منع الكشف غير المصرح به)، السلامة (ضمان تغيير البيانات بطريقة مصرح بها فقط)، والتوافر (ضمان عمل الأنظمة بسرعة وعدم رفض الخدمة للمستخدمين المصرح لهم).",
                arabicTranslation: "ما هي الأهداف الرئيسية الثلاثة لأمن الحاسب (ثلاثية CIA)؟"
            },
            {
                question: "What is the purpose of data confidentiality?",
                options: [
                    "Ensuring data is accessible to all",
                    "Assures that confidential information is not made available or disclosed to unauthorized individuals",
                    "Modifying data securely",
                    "Ensuring system availability"
                ],
                correctAnswer: "b",
                definition: "Assures that confidential information is not made available or disclosed to unauthorized individuals.",
                page: 7,
                chapter: 1,
                explanation: "السرية البيانات تهدف إلى ضمان عدم تعرض المعلومات السرية للأفراد غير المصرح لهم، مما يحمي البيانات الحساسة مثل أرقام بطاقات الائتمان أو المعلومات الشخصية.",
                arabicTranslation: "ما هو الهدف من سرية البيانات؟"
            },
            {
                question: "What does data integrity assure?",
                options: [
                    "Data is always accessible",
                    "Assures that information and programs are changed only in a specified and authorized manner",
                    "Data is encrypted",
                    "Data is publicly available"
                ],
                correctAnswer: "b",
                definition: "Assures that information and programs are changed only in a specified and authorized manner.",
                page: 7,
                chapter: 1,
                explanation: "سلامة البيانات تضمن أن يتم تغيير المعلومات والبرامج فقط بطريقة مصرح بها، مما يمنع التعديلات غير المصرح بها التي قد تؤدي إلى أخطاء أو فساد البيانات.",
                arabicTranslation: "ماذا تضمن سلامة البيانات؟"
            },
            {
                question: "What is the goal of availability in computer security?",
                options: [
                    "Encrypting all data",
                    "Assures that systems work promptly and service is not denied to authorized users",
                    "Preventing data modification",
                    "Ensuring data confidentiality"
                ],
                correctAnswer: "b",
                definition: "Assures that systems work promptly and service is not denied to authorized users.",
                page: 7,
                chapter: 1,
                explanation: "التوافر يهدف إلى ضمان عمل الأنظمة بسرعة وعدم رفض الخدمة للمستخدمين المصرح لهم، مما يضمن استمرارية الوصول إلى الموارد عند الحاجة.",
                arabicTranslation: "ما هو الهدف من التوافر في أمن الحاسب؟"
            },
            {
                question: "What is an example of high confidentiality data?",
                options: [
                    "Public directory information",
                    "Student grade information",
                    "Online poll data",
                    "News articles"
                ],
                correctAnswer: "b",
                definition: "Student grade information is an asset whose confidentiality is considered to be very high.",
                page: 13,
                chapter: 1,
                explanation: "معلومات درجات الطلاب تُعتبر بيانات ذات سرية عالية لأنها حساسة ويجب أن تكون متاحة فقط للطلاب، أولياء الأمور، وأصحاب العمل عند الضرورة.",
                arabicTranslation: "ما هو مثال على البيانات ذات السرية العالية؟"
            },
            {
                question: "What is an example of high integrity data?",
                options: [
                    "Anonymous online poll",
                    "A hospital patient’s allergy information",
                    "Public website data",
                    "Social media posts"
                ],
                correctAnswer: "b",
                definition: "A hospital patient’s allergy information is an asset that requires a high degree of integrity.",
                page: 16,
                chapter: 1,
                explanation: "معلومات حساسية المريض في المستشفى تتطلب سلامة عالية لضمان أن تكون صحيحة ومحدثة، حيث يعتمد الأطباء عليها في اتخاذ القرارات الطبية.",
                arabicTranslation: "ما هو مثال على البيانات ذات السلامة العالية؟"
            },
            {
                question: "What is an example of a high availability requirement?",
                options: [
                    "Online telephone directory lookup",
                    "Public website for a university",
                    "System providing authentication",
                    "Social media platform"
                ],
                correctAnswer: "c",
                definition: "A system that provides authentication has a high availability requirement as a loss of service could result in denying access to many users and could result in financial loss to the company providing the authentication.",
                page: 21,
                chapter: 1,
                explanation: "نظام توفير المصادقة يتطلب توافرًا عاليًا لأن انقطاع الخدمة قد يؤدي إلى خسائر مالية، حيث يعتمد العملاء على الوصول المستمر إلى الموارد.",
                arabicTranslation: "ما هو مثال على متطلب التوافر العالي؟"
            },
            {
                question: "What is a salami attack?",
                options: [
                    "Flooding a network with traffic",
                    "A series of minor attacks, which together result in a large scale attack",
                    "Intercepting messages",
                    "Creating fake data"
                ],
                correctAnswer: "b",
                definition: "Salami Attack – a series of minor attacks, which together result in a large scale attack (example: slicing fractions of cents off of transactions and directing to an account).",
                page: 22,
                chapter: 1,
                explanation: "هجوم السالامي هو سلسلة من الهجمات الصغيرة التي تؤدي معًا إلى هجوم كبير، مثل اقتطاع أجزاء صغيرة من المال من كل معاملة لتجميع مبلغ كبير.",
                arabicTranslation: "ما هو هجوم السالامي؟"
            },
            {
                question: "What is a vulnerability in a security system?",
                options: [
                    "A malicious attack",
                    "A weakness in a system",
                    "A method to block threats",
                    "An authorized access attempt"
                ],
                correctAnswer: "b",
                definition: "Vulnerability – a weakness in a system that could potentially be exploited to cause harm to an asset.",
                page: 23,
                chapter: 1,
                explanation: "الثغرة الأمنية هي نقطة ضعف في نظام الأمان يمكن استغلالها للتسبب في ضرر، مثل سوء التهيئة أو الأخطاء في البرمجيات.",
                arabicTranslation: "ما هي الثغرة في نظام الأمان؟"
            },
            {
                question: "What is the purpose of a security control?",
                options: [
                    "To create vulnerabilities",
                    "Methods and ways to block a threat that tries to exploit one or more vulnerabilities",
                    "To allow unauthorized access",
                    "To increase system complexity"
                ],
                correctAnswer: "b",
                definition: "Controls – methods and ways to block a threat that tries to exploit one or more vulnerabilities.",
                page: 23,
                chapter: 1,
                explanation: "الضوابط الأمنية هي الطرق والوسائل المستخدمة لمنع التهديدات التي تحاول استغلال الثغرات، مثل جدران الحماية أو التشفير.",
                arabicTranslation: "ما هو الهدف من الضوابط الأمنية؟"
            },
            {
                question: "What is an interruption threat?",
                options: [
                    "Unauthorized access to data",
                    "An asset of a system becomes lost, unavailable, or unusable",
                    "Modifying data without authorization",
                    "Creating fake data"
                ],
                correctAnswer: "b",
                definition: "Interruption – an asset of a system becomes lost, unavailable, or unusable.",
                page: 25,
                chapter: 1,
                explanation: "التهديد بالانقطاع يحدث عندما يصبح أحد الأصول غير متاح أو غير صالح للاستخدام، مثل هجمات الحرمان من الخدمة (DoS).",
                arabicTranslation: "ما هو التهديد بالانقطاع؟"
            },
            {
                question: "What is a passive attack?",
                options: [
                    "Modifying data",
                    "An attacker observes the messages and copies the content",
                    "Denying service to users",
                    "Creating fake messages"
                ],
                correctAnswer: "b",
                definition: "Passive Attack – an attacker observes the messages and copies the content without altering the content.",
                page: 27,
                chapter: 1,
                explanation: "الهجوم السلبي هو عندما يراقب المهاجم الرسائل وينسخها دون تغيير محتواها، مثل التجسس أو تحليل حركة البيانات.",
                arabicTranslation: "ما هو الهجوم السلبي؟"
            },
            {
                question: "What is one method to prevent an attack?",
                options: [
                    "Increase system complexity",
                    "Prevent – block attack by closing vulnerability",
                    "Allow unauthorized access",
                    "Reduce system monitoring"
                ],
                correctAnswer: "b",
                definition: "Prevent – block attack by closing vulnerability.",
                page: 29,
                chapter: 1,
                explanation: "منع الهجوم يتضمن سد الثغرات الأمنية لمنع المهاجمين من استغلالها، مثل تحديث البرمجيات أو إغلاق المنافذ غير الضرورية.",
                arabicTranslation: "ما هي إحدى الطرق لمنع الهجوم؟"
            },
            {
                question: "What is the economy of mechanism principle?",
                options: [
                    "Use complex security mechanisms",
                    "Security mechanisms should be as simple as possible",
                    "Hide security mechanisms",
                    "Use multiple conditions for access"
                ],
                correctAnswer: "b",
                definition: "Economy of Mechanism – security mechanisms should be as simple as possible so that they are easier to implement and verify, resulting in fewer vulnerabilities.",
                page: 33,
                chapter: 1,
                explanation: "مبدأ اقتصادية الآلية ينص على أن الآليات الأمنية يجب أن تكون بسيطة قدر الإمكان لتسهيل التنفيذ والتحقق منها مع تقليل الثغرات.",
                arabicTranslation: "ما هو مبدأ اقتصادية الآلية؟"
            },
            {
                question: "What is the purpose of the fail-safe defaults principle?",
                options: [
                    "Grant access unless explicitly denied",
                    "Unless a subject is given explicit access to an object, it should be denied access",
                    "Allow all users access",
                    "Use secret designs"
                ],
                correctAnswer: "b",
                definition: "Fail-Safe Defaults – unless a subject is given explicit access to an object, it should be denied access to that object.",
                page: 33,
                chapter: 1,
                explanation: "مبدأ الافتراضات الآمنة في حالة الفشل ينص على أنه يجب رفض الوصول إلى مورد ما لم يتم منحه صراحةً، مما يعزز الأمان.",
                arabicTranslation: "ما هو الهدف من مبدأ الافتراضات الآمنة في حالة الفشل؟"
            },
            {
                question: "What is the isolation principle in security design?",
                options: [
                    "Allow public access to critical resources",
                    "Public access should be isolated from critical resources",
                    "Connect all resources",
                    "Share user files"
                ],
                correctAnswer: "b",
                definition: "Isolation – public access should be isolated from critical resources.",
                page: 34,
                chapter: 1,
                explanation: "مبدأ العزل يتطلب فصل الوصول العام عن الموارد الحرجة لمنع الوصول غير المصرح به، مثل عزل ملفات المستخدمين عن بعضها.",
                arabicTranslation: "ما هو مبدأ العزل في تصميم الأمان؟"
            },
            {
                question: "What is a technical measure for security functional requirements?",
                options: [
                    "Risk assessment",
                    "Access control",
                    "Personnel security",
                    "Emergency planning"
                ],
                correctAnswer: "b",
                definition: "Security Functional Requirements – technical measures: access control; ID & authentication; system & communication protection; system & information integrity.",
                page: 35,
                chapter: 1,
                explanation: "التدابير الفنية لمتطلبات الأمان الوظيفية تشمل التحكم في الوصول، المصادقة والهوية، حماية النظام والاتصالات، وسلامة النظام والبيانات.",
                arabicTranslation: "ما هو أحد التدابير الفنية لمتطلبات الأمان الوظيفية؟"
            },
            {
                question: "What is a management control for security?",
                options: [
                    "System protection",
                    "Awareness and training",
                    "Access control",
                    "Incident response"
                ],
                correctAnswer: "b",
                definition: "Management Controls – awareness & training; audit; certification; security assessments; emergency planning; maintenance; physical & environment protection; personnel security; risk assessment.",
                page: 35,
                chapter: 1,
                explanation: "الضوابط الإدارية تشمل التوعية والتدريب، التدقيق، التصديق، التقييمات الأمنية، التخطيط للطوارئ، الصيانة، الحماية البيئية والفيزيائية، وأمن الأفراد.",
                arabicTranslation: "ما هو أحد الضوابط الإدارية للأمان؟"
            },
            {
                question: "What is an example of a low impact security breach?",
                options: [
                    "Loss of life",
                    "The loss would have a limited adverse effect, such as minor damage or minor financial loss",
                    "Significant harm to individuals",
                    "Severe effect on operations"
                ],
                correctAnswer: "b",
                definition: "Low Impact – the loss of confidentiality, integrity, or availability would have a limited adverse effect, such as minor damage or minor financial loss.",
                page: 9,
                chapter: 1,
                explanation: "الاختراق الأمني ذو التأثير المنخفض يؤدي إلى ضرر محدود، مثل الضرر البسيط أو الخسارة المالية البسيطة، دون تأثير كبير على العمليات.",
                arabicTranslation: "ما هو مثال على الاختراق الأمني ذو التأثير المنخفض؟"
            },

            {
                question: "What is symmetric encryption?",
                options: [
                    "Uses different keys for encryption and decryption",
                    "A cryptographic system that uses the same key for both encryption and decryption",
                    "Does not use keys",
                    "Uses public keys only"
                ],
                correctAnswer: "b",
                definition: "Symmetric Encryption – a cryptographic system that uses the same key for both encryption and decryption.",
                page: 37,
                chapter: 2,
                explanation: "التشفير المتماثل هو نظام تشفير يستخدم نفس المفتاح للتشفير والفك، مما يجعله فعالًا ولكنه يتطلب إدارة آمنة للمفتاح.",
                arabicTranslation: "ما هو التشفير المتماثل؟"
            },
            {
                question: "What is plaintext in cryptography?",
                options: [
                    "Coded message",
                    "Original message before encryption",
                    "Decrypted message",
                    "Encryption algorithm"
                ],
                correctAnswer: "b",
                definition: "Plaintext – original message before encryption.",
                page: 38,
                chapter: 2,
                explanation: "النص العادي هو الرسالة الأصلية قبل تحويلها إلى نص مشفر باستخدام خوارزمية التشفير.",
                arabicTranslation: "ما هو النص العادي في التشفير؟"
            },
            {
                question: "What is a block cipher?",
                options: [
                    "Converts one symbol of plaintext into ciphertext",
                    "Processes the plaintext input in fixed-size blocks and produces a block of ciphertext of equal size for each plaintext block",
                    "Uses multiple keys",
                    "Encrypts data without a key"
                ],
                correctAnswer: "b",
                definition: "Block Cipher – processes the plaintext input in fixed-size blocks and produces a block of ciphertext of equal size for each plaintext block.",
                page: 40,
                chapter: 2,
                explanation: "التشفير الكتلي يعالج النص العادي في كتل ذات حجم ثابت وينتج كتلة من النص المشفر بنفس الحجم لكل كتلة نص عادي.",
                arabicTranslation: "ما هو التشفير الكتلي؟"
            },
            {
                question: "What is a requirement for secure symmetric encryption?",
                options: [
                    "A weak encryption algorithm",
                    "A strong encryption algorithm and secret key known only to sender/receiver",
                    "Publicly shared keys",
                    "No encryption algorithm"
                ],
                correctAnswer: "b",
                definition: "Requirements for secure use of symmetric encryption: a strong encryption algorithm and secret key known only to sender/receiver.",
                page: 41,
                chapter: 2,
                explanation: "لضمان أمان التشفير المتماثل، يجب استخدام خوارزمية تشفير قوية ومفتاح سري معروف فقط للمرسل والمتلقي.",
                arabicTranslation: "ما هو متطلب التشفير المتماثل الآمن؟"
            },
            {
                question: "What is a brute-force attack in cryptanalysis?",
                options: [
                    "Analyzing algorithm weaknesses",
                    "Trying every possible key on a piece of ciphertext until a clear translation into plaintext is obtained",
                    "Guessing the plaintext",
                    "Modifying the ciphertext"
                ],
                correctAnswer: "b",
                definition: "Brute-Force Attack – trying every possible key on a piece of ciphertext until a clear translation into plaintext is obtained.",
                page: 43,
                chapter: 2,
                explanation: "الهجوم بالقوة الغاشمة يتضمن تجربة كل مفتاح محتمل على النص المشفر حتى يتم الحصول على ترجمة واضحة إلى النص العادي.",
                arabicTranslation: "ما هو الهجوم بالقوة الغاشمة في تحليل التشفير؟"
            },
            {
                question: "What is the Caesar Cipher?",
                options: [
                    "A complex encryption algorithm",
                    "A substitution cipher that replaces each letter by another letter a fixed number of positions down the alphabet",
                    "A public-key encryption method",
                    "A stream cipher"
                ],
                correctAnswer: "b",
                definition: "Caesar Cipher – a substitution cipher that replaces each letter by another letter a fixed number of positions down the alphabet.",
                page: 49,
                chapter: 2,
                explanation: "تشفير قيصر هو تشفير استبدال يحل محل كل حرف بحرف آخر بإزاحة ثابتة في الأبجدية، مثل إزاحة كل حرف بثلاثة مواضع.",
                arabicTranslation: "ما هو تشفير قيصر؟"
            },
            {
                question: "Why is the monoalphabetic cipher vulnerable?",
                options: [
                    "It uses multiple keys",
                    "Vulnerable to frequency of letters analysis",
                    "It uses no keys",
                    "It changes letter frequencies"
                ],
                correctAnswer: "b",
                definition: "Monoalphabetic Cipher Security – vulnerable to frequency of letters analysis because there is a one-to-one relationship between each plaintext and ciphertext character.",
                page: 53,
                chapter: 2,
                explanation: "التشفير الأحادي الحرفي عرضة للتحليل بناءً على تكرار الحروف بسبب العلاقة الفردية بين أحرف النص العادي والنص المشفر.",
                arabicTranslation: "لماذا يكون التشفير الأحادي الحرفي عرضة للخطر؟"
            },
            {
                question: "What is the Playfair Cipher?",
                options: [
                    "A single-letter substitution cipher",
                    "Encrypts pairs of letters (digraphs), rather than single letters as in the simple substitution cipher",
                    "A stream cipher",
                    "A public-key cipher"
                ],
                correctAnswer: "b",
                definition: "Playfair Cipher – encrypts pairs of letters (digraphs), rather than single letters as in the simple substitution cipher, using a 5x5 matrix based on a keyword.",
                page: 58,
                chapter: 2,
                explanation: "تشفير بلايفير يشفر أزواج الحروف باستخدام مصفوفة 5x5 مبنية على كلمة مفتاحية، مما يحسن الأمان مقارنة بالتشفير الأحادي الحرفي.",
                arabicTranslation: "ما هو تشفير بلايفير؟"
            },
            {
                question: "What is an unconditionally secure encryption scheme?",
                options: [
                    "Ciphertext provides enough information to decrypt",
                    "The ciphertext generated by the encryption scheme does not contain enough information to uniquely determine the corresponding plaintext",
                    "Uses a weak algorithm",
                    "Requires no computational power"
                ],
                correctAnswer: "b",
                definition: "Unconditionally Secure – the ciphertext generated by the encryption scheme does not contain enough information to uniquely determine the corresponding plaintext, no matter how much computational power is available.",
                page: 46,
                chapter: 2,
                explanation: "التشفير الآمن بشكل غير مشروط يعني أن النص المشفر لا يوفر معلومات كافية لتحديد النص العادي بشكل فريد، بغض النظر عن القوة الحسابية.",
                arabicTranslation: "ما هو نظام التشفير الآمن بشكل غير مشروط؟"
            },
            {
                question: "What is the Advanced Encryption Standard (AES)?",
                options: [
                    "A stream cipher",
                    "A symmetric block cipher with a block length of 128 bits",
                    "A public-key encryption method",
                    "An outdated encryption standard"
                ],
                correctAnswer: "b",
                definition: "Advanced Encryption Standard (AES) – a symmetric block cipher with a block length of 128 bits and support for key lengths of 128, 192, and 256 bits.",
                page: 74,
                chapter: 2,
                explanation: "معيار التشفير المتقدم (AES) هو تشفير كتلي متماثل يستخدم كتلًا بحجم 128 بت ويدعم أطوال مفاتيح 128، 192، أو 256 بت، ويُستخدم على نطاق واسع في التطبيقات التجارية.",
                arabicTranslation: "ما هو معيار التشفير المتقدم (AES)؟"
            },

            {
                question: "What are access controls in computer security?",
                options: [
                    "Methods to increase system performance",
                    "Security features that control how users and systems communicate and interact with one another",
                    "Encryption algorithms",
                    "Network monitoring tools"
                ],
                correctAnswer: "b",
                definition: "Access Controls – security features that control how users and systems communicate and interact with one another; often the first line of defense in securing assets.",
                page: 126,
                chapter: 4,
                explanation: "التحكم في الوصول هو ميزات أمنية تتحكم في كيفية تفاعل المستخدمين والأنظمة مع بعضها، وغالبًا ما تُعتبر الخط الأول للدفاع عن الأصول.",
                arabicTranslation: "ما هي ضوابط الوصول في أمن الحاسب؟"
            },
            {
                question: "What is the purpose of authorization in access control?",
                options: [
                    "Encrypting data",
                    "Determines that the proven identity has some set of characteristics associated with it that gives it the right to access the requested resources",
                    "Monitoring network traffic",
                    "Detecting intrusions"
                ],
                correctAnswer: "b",
                definition: "Authorization – determines that the proven identity has some set of characteristics associated with it that gives it the right to access the requested resources.",
                page: 127,
                chapter: 4,
                explanation: "التفويض في التحكم بالوصول هو عملية تحديد ما إذا كانت الهوية المثبتة تمتلك الخصائص التي تمنحها الحق في الوصول إلى الموارد المطلوبة.",
                arabicTranslation: "ما هو الهدف من التفويض في التحكم بالوصول؟"
            },
            {
                question: "What is a role-based access control (RBAC) model?",
                options: [
                    "Grants access based on user identity only",
                    "Allows access to resources based on the role the user holds within the company",
                    "Allows users to transfer ownership",
                    "Restricts access based on sensitivity"
                ],
                correctAnswer: "b",
                definition: "Role-Based Access Control (RBAC) – allows access to resources based on the role the user holds within the company.",
                page: 136,
                chapter: 4,
                explanation: "التحكم في الوصول القائم على الأدوار (RBAC) يسمح بالوصول إلى الموارد بناءً على الدور الذي يشغله المستخدم داخل الشركة، مما يسهل إدارة الأذونات.",
                arabicTranslation: "ما هو نموذج التحكم في الوصول القائم على الأدوار (RBAC)؟"
            },
            {
                question: "What is a characteristic of Discretionary Access Control (DAC)?",
                options: [
                    "Users cannot transfer ownership",
                    "Users may transfer object ownership to another user",
                    "Access is based on sensitivity levels",
                    "Access is role-based only"
                ],
                correctAnswer: "b",
                definition: "Discretionary Access Control (DAC) – users may transfer object ownership to another user and determine the access type of other users.",
                page: 134,
                chapter: 4,
                explanation: "التحكم في الوصول التقديري (DAC) يسمح للمستخدمين بنقل ملكية الكائنات إلى مستخدمين آخرين وتحديد نوع الوصول لهم، مما يمنح مرونة أكبر.",
                arabicTranslation: "ما هي إحدى خصائص التحكم في الوصول التقديري (DAC)؟"
            },
            {
                question: "What is Mandatory Access Control (MAC) used for?",
                options: [
                    "Allowing users to share data freely",
                    "Limits access to resources based on the sensitivity of the information and the authorization of the user",
                    "Granting access based on roles",
                    "Allowing all users access"
                ],
                correctAnswer: "b",
                definition: "Mandatory Access Control (MAC) – limits access to resources based on the sensitivity of the information (indicated by a label) and the authorization of the user; used in high-security environments such as the military.",
                page: 135,
                chapter: 4,
                explanation: "التحكم في الوصول الإلزامي (MAC) يحد من الوصول إلى الموارد بناءً على حساسية المعلومات وتفويض المستخدم، ويُستخدم في البيئات عالية الأمان مثل العسكرية.",
                arabicTranslation: "ما هو استخدام التحكم في الوصول الإلزامي (MAC)؟"
            },
            {
                question: "What is rule-based access control?",
                options: [
                    "Grants access based on user identity",
                    "Uses specific rules that indicate what can and cannot happen between a subject and an object",
                    "Allows unrestricted access",
                    "Uses roles to grant access"
                ],
                correctAnswer: "b",
                definition: "Rule-Based Access Control – uses specific rules that indicate what can and cannot happen between a subject and an object; often used in MAC systems.",
                page: 139,
                chapter: 4,
                explanation: "التحكم في الوصول القائم على القواعد يستخدم قواعد محددة لتحديد ما يمكن وما لا يمكن أن يحدث بين موضوع وكائن، وغالبًا ما يُستخدم في أنظمة MAC.",
                arabicTranslation: "ما هو التحكم في الوصول القائم على القواعد؟"
            },
            {
                question: "What is a constrained user interface in access control?",
                options: [
                    "Grants full access to users",
                    "Restrict user’s access abilities by not allowing them certain types of access or the ability to request certain functions or information",
                    "Encrypts user data",
                    "Monitors user activity"
                ],
                correctAnswer: "b",
                definition: "Constrained User Interfaces – restrict user’s access abilities by not allowing them certain types of access or the ability to request certain functions or information.",
                page: 140,
                chapter: 4,
                explanation: "واجهات المستخدم المقيدة تحد من قدرات وصول المستخدم عن طريق منع أنواع معينة من الوصول أو القدرة على طلب وظائف أو معلومات معينة.",
                arabicTranslation: "ما هي واجهة المستخدم المقيدة في التحكم بالوصول؟"
            },
            {
                question: "What is centralized access control administration?",
                options: [
                    "Multiple entities control access",
                    "One entity is responsible for overseeing access to all corporate resources",
                    "No access control is applied",
                    "Users control their own access"
                ],
                correctAnswer: "b",
                definition: "Centralized Access Control Administration – one entity is responsible for overseeing access to all corporate resources; provides consistent access control across the enterprise.",
                page: 142,
                chapter: 4,
                explanation: "إدارة التحكم في الوصول المركزية تعني أن كيانًا واحدًا مسؤول عن الإشراف على الوصول إلى جميع موارد الشركة، مما يوفر تحكمًا متسقًا.",
                arabicTranslation: "ما هي إدارة التحكم في الوصول المركزية؟"
            },
            {
                question: "What is a best practice for access control?",
                options: [
                    "Allow anonymous access",
                    "Enforce very strict access criteria",
                    "Use default passwords",
                    "Disable audit logs"
                ],
                correctAnswer: "b",
                definition: "Access Control Practices – best practices include: enforce very strict access criteria; anonymous accounts should be denied; protect audit logs.",
                page: 143,
                chapter: 4,
                explanation: "أفضل الممارسات للتحكم في الوصول تشمل فرض معايير وصول صارمة، رفض الحسابات المجهولة، وحماية سجلات التدقيق.",
                arabicTranslation: "ما هي إحدى أفضل الممارسات للتحكم في الوصول؟"
            },
            {
                question: "What is the purpose of an access control matrix?",
                options: [
                    "Encrypts data",
                    "A table of subjects and objects indicating what actions individual subjects can take upon individual objects",
                    "Monitors network traffic",
                    "Authenticates users"
                ],
                correctAnswer: "b",
                definition: "Access Control Matrix – a table of subjects and objects indicating what actions individual subjects can take upon individual objects.",
                page: 140,
                chapter: 4,
                explanation: "مصفوفة التحكم في الوصول هي جدول يوضح الإجراءات التي يمكن للمواضيع الفردية اتخاذها على الكائنات الفردية، وتُستخدم لتنفيذ التحكم في الوصول.",
                arabicTranslation: "ما هو الهدف من مصفوفة التحكم في الوصول؟"
            },

            {
                question: "What is the definition of malware?",
                options: [
                    "Software to improve system performance",
                    "A program that is inserted into a system, usually covertly, with the intent of compromising the confidentiality, integrity, or availability",
                    "A system monitoring tool",
                    "A data encryption program"
                ],
                correctAnswer: "b",
                definition: "Malware – a program that is inserted into a system, usually covertly, with the intent of compromising the confidentiality, integrity, or availability of the victim’s data, applications, or operating system.",
                page: 145,
                chapter: 6,
                explanation: "البرمجيات الخبيثة هي برامج تُدرج في النظام، عادةً بشكل خفي، بهدف المساس بالسرية، السلامة، أو توافر بيانات الضحية، التطبيقات، أو نظام التشغيل.",
                arabicTranslation: "ما هو تعريف البرمجيات الخبيثة؟"
            },
            {
                question: "What is a characteristic of a virus?",
                options: [
                    "Runs independently",
                    "Attaches itself to a program and propagates copies of itself to other programs",
                    "Sends data over networks",
                    "Encrypts system files"
                ],
                correctAnswer: "b",
                definition: "Virus – attaches itself to a program and propagates copies of itself to other programs.",
                page: 147,
                chapter: 6,
                explanation: "الفيروس هو برمجية خبيثة تلتصق ببرنامج وتنتشر بنسخ من نفسها إلى برامج أخرى، وتعمل عند تنشيط البرنامج المضيف.",
                arabicTranslation: "ما هي إحدى خصائص الفيروس؟"
            },
            {
                question: "What is a worm in malicious software?",
                options: [
                    "Attaches to programs",
                    "A program that can replicate itself and send copies from computer to computer across network connections",
                    "Encrypts data",
                    "Hides in system logs"
                ],
                correctAnswer: "b",
                definition: "Worm – a program that can replicate itself and send copies from computer to computer across network connections.",
                page: 152,
                chapter: 6,
                explanation: "الدودة هي برنامج خبيث يمكنه تكرار نفسه وإرسال نسخ عبر اتصالات الشبكة من جهاز إلى آخر، مستغلة الثغرات للانتشار.",
                arabicTranslation: "ما هي الدودة في البرمجيات الخبيثة؟"
            },
            {
                question: "What is a logic bomb?",
                options: [
                    "A program that replicates across networks",
                    "A program inserted that will ‘explode’ when certain conditions occur",
                    "A program that encrypts data",
                    "A program that monitors traffic"
                ],
                correctAnswer: "b",
                definition: "Logic Bomb – a program inserted that will ‘explode’ when certain conditions occur, performing its malicious function at that time.",
                page: 147,
                chapter: 6,
                explanation: "القنبلة المنطقية هي برنامج يتم تنشيطه عند تحقق شرط معين، مثل تاريخ محدد، لتنفيذ وظيفة خبيثة مثل حذف البيانات.",
                arabicTranslation: "ما هي القنبلة المنطقية؟"
            },
            {
                question: "What is a Trojan horse?",
                options: [
                    "A program that replicates itself",
                    "A program that appears to have one function, but actually contains additional, usually undesirable, functionality",
                    "A program that encrypts data",
                    "A program that monitors network traffic"
                ],
                correctAnswer: "b",
                definition: "Trojan Horse – a program that appears to have one function, but actually contains additional, usually undesirable, functionality.",
                page: 147,
                chapter: 6,
                explanation: "حصان طروادة هو برنامج مزيف يحتوي على وظائف إضافية غير متوقعة، غالبًا خبيثة، مثل السماح بالوصول غير المصرح به.",
                arabicTranslation: "ما هو حصان طروادة؟"
            },
            {
                question: "What is a boot sector virus?",
                options: [
                    "Infects executable files",
                    "Infects a master boot record",
                    "Infects macro code",
                    "Encrypts system files"
                ],
                correctAnswer: "b",
                definition: "Boot Sector Virus – infects a master boot record and spreads when a system is booted from the disk containing the virus.",
                page: 150,
                chapter: 6,
                explanation: "فيروس قطاع التمهيد يصيب سجل التمهيد الرئيسي وينتشر عندما يتم تشغيل النظام من القرص المحتوي على الفيروس.",
                arabicTranslation: "ما هو فيروس قطاع التمهيد؟"
            },
            {
                question: "What is a polymorphic virus?",
                options: [
                    "Hides itself from antivirus software",
                    "Mutates with every infection, recreating a new version of itself",
                    "Encrypts itself with a fixed key",
                    "Infects network traffic"
                ],
                correctAnswer: "b",
                definition: "Polymorphic Virus – mutates with every infection, recreating a new version of itself, making detection by antivirus software difficult.",
                page: 150,
                chapter: 6,
                explanation: "الفيروس المتعدد الأشكال يعيد إنشاء نفسه مع كل إصابة، مما يجعل اكتشافه بواسطة برامج مكافحة الفيروسات أمرًا صعبًا بسبب تغيير شكله.",
                arabicTranslation: "ما هو الفيروس المتعدد الأشكال؟"
            },
            {
                question: "What is a countermeasure for viruses?",
                options: [
                    "Allow all programs to run",
                    "Detect the virus, identify it, and remove all traces from the infected program to restore it to its original state",
                    "Increase system vulnerabilities",
                    "Disable antivirus software"
                ],
                correctAnswer: "b",
                definition: "Virus Countermeasures – detect the virus, identify it, and remove all traces from the infected program to restore it to its original state.",
                page: 151,
                chapter: 6,
                explanation: "التدابير المضادة للفيروسات تشمل اكتشاف الفيروس، تحديده، وإزالة جميع آثاره من البرنامج المصاب لاستعادة حالته الأصلية.",
                arabicTranslation: "ما هو أحد التدابير المضادة للفيروسات؟"
            },
            {
                question: "What is signature-based worm scan filtering?",
                options: [
                    "Encrypts network traffic",
                    "Generates a worm signature to find sequences and patterns to prevent the worm from entering/leaving a network",
                    "Allows all network traffic",
                    "Monitors system logs"
                ],
                correctAnswer: "b",
                definition: "Signature-Based Worm Scan Filtering – generates a worm signature to find sequences and patterns to prevent the worm from entering/leaving a network.",
                page: 154,
                chapter: 6,
                explanation: "تصفية مسح الديدان القائمة على التوقيع تولد توقيعًا للدودة للعثور على التسلسلات والأنماط لمنع الدودة من دخول أو مغادرة الشبكة.",
                arabicTranslation: "ما هي تصفية مسح الديدان القائمة على التوقيع؟"
            },
            {
                question: "What was a method used by the Morris worm to gain access?",
                options: [
                    "Encrypting network traffic",
                    "Cracking password files to log into other systems",
                    "Installing antivirus software",
                    "Modifying system logs"
                ],
                correctAnswer: "b",
                definition: "Morris Worm – used several methods to gain access to systems, including cracking password files to log into other systems and exploiting bugs in the finger and sendmail protocols.",
                page: 153,
                chapter: 6,
                explanation: "دودة موريس استخدمت طرقًا مثل كسر ملفات كلمات المرور لتسجيل الدخول إلى الأنظمة، واستغلال الأخطاء في بروتوكولات finger وsendmail.",
                arabicTranslation: "ما هي إحدى الطرق التي استخدمتها دودة موريس للوصول؟"
            },

            {
                question: "What is a security intrusion?",
                options: [
                    "A system performance issue",
                    "A security event where an intruder gains (or attempts to gain) access to a system or system resource without authorization",
                    "A software update",
                    "A network optimization"
                ],
                correctAnswer: "b",
                definition: "Security Intrusion – a security event where an intruder gains (or attempts to gain) access to a system or system resource without authorization.",
                page: 157,
                chapter: 7,
                explanation: "الاقتحام الأمني هو حدث أمني يحاول فيه متسلل الوصول غير المصرح به إلى نظام أو موارده، مما قد يؤدي إلى اختراق البيانات.",
                arabicTranslation: "ما هو الاقتحام الأمني؟"
            },
            {
                question: "What is the purpose of an Intrusion Detection System (IDS)?",
                options: [
                    "Encrypt data",
                    "A security service that monitors and analyzes system events to find and provide real-time warning of unauthorized access attempts",
                    "Increase system performance",
                    "Manage user authentication"
                ],
                correctAnswer: "b",
                definition: "Intrusion Detection – a security service that monitors and analyzes system events to find and provide real-time warning of unauthorized access attempts.",
                page: 157,
                chapter: 7,
                explanation: "نظام كشف التسلل يراقب ويحلل أحداث النظام لتوفير تحذيرات فورية من محاولات الوصول غير المصرح بها، مثل كاشف الدخان.",
                arabicTranslation: "ما هو الهدف من نظام كشف التسلل (IDS)؟"
            },
            {
                question: "What is a host-based IDS?",
                options: [
                    "Monitors network traffic",
                    "Specialized software to monitor single host activity to detect suspicious behavior",
                    "Encrypts system files",
                    "Manages user authentication"
                ],
                correctAnswer: "b",
                definition: "Host-Based IDS – specialized software to monitor single host activity to detect suspicious behavior, whether from external or internal threats.",
                page: 166,
                chapter: 7,
                explanation: "نظام كشف التسلل المستند إلى المضيف هو برمجية متخصصة تراقب نشاط مضيف واحد لاكتشاف السلوك المشبوه، سواء من هجمات خارجية أو داخلية.",
                arabicTranslation: "ما هو نظام كشف التسلل المستند إلى المضيف؟"
            },
            {
                question: "What is a network-based IDS?",
                options: [
                    "Monitors single host activity",
                    "Monitors traffic at selected points on a network in (near) real time to detect intrusion patterns",
                    "Encrypts network data",
                    "Authenticates users"
                ],
                correctAnswer: "b",
                definition: "Network-Based IDS – monitors traffic at selected points on a network in (near) real time to detect intrusion patterns.",
                page: 171,
                chapter: 7,
                explanation: "نظام كشف التسلل المستند إلى الشبكة يراقب حركة الشبكة في نقاط محددة بشكل شبه فوري لاكتشاف أنماط التسلل.",
                arabicTranslation: "ما هو نظام كشف التسلل المستند إلى الشبكة؟"
            },
            {
                question: "What is anomaly detection in IDS?",
                options: [
                    "Encrypting system logs",
                    "Involves the collection of data relating to the behavior of authorized users over a period of time to detect significant deviations",
                    "Blocking all network traffic",
                    "Authenticating users"
                ],
                correctAnswer: "b",
                definition: "Anomaly Detection – involves the collection of data relating to the behavior of authorized users over a period of time to detect significant deviations.",
                page: 166,
                chapter: 7,
                explanation: "كشف الشذوذ يتضمن جمع بيانات عن سلوك المستخدمين المصرح لهم على مدى فترة زمنية لاكتشاف الانحرافات الكبيرة التي قد تشير إلى تسلل.",
                arabicTranslation: "ما هو كشف الشذوذ في نظام كشف التسلل؟"
            },
            {
                question: "What is a characteristic of insider attacks?",
                options: [
                    "Easily detectable",
                    "Difficult to detect and prevent as employees have access to systems and knowledge of the systems",
                    "Always external",
                    "Do not require authentication"
                ],
                correctAnswer: "b",
                definition: "Insider Attacks – difficult to detect and prevent as employees have access to systems and knowledge of the systems; often motivated by revenge or entitlement.",
                page: 167,
                chapter: 7,
                explanation: "الهجمات الداخلية صعبة الكشف والمنع لأن الموظفين لديهم وصول ومعرفة بالأنظمة، وقد تكون مدفوعة بالانتقام أو الشعور بالاستحقاق.",
                arabicTranslation: "ما هي إحدى خصائص الهجمات الداخلية؟"
            },
            {
                question: "What is a native audit record?",
                options: [
                    "A record created by IDS",
                    "Provided by the operating system and always available",
                    "A user-generated log",
                    "An encrypted system log"
                ],
                correctAnswer: "b",
                definition: "Native Audit Records – provided by the operating system and always available, but may not be in the optimum form for IDS tasks.",
                page: 168,
                chapter: 7,
                explanation: "سجلات التدقيق الأصلية يتم توفيرها بواسطة نظام التشغيل، وهي متاحة دائمًا ولكنها قد لا تكون مثالية لمهام كشف التسلل.",
                arabicTranslation: "ما هو سجل التدقيق الأصلي؟"
            },
            {
                question: "What is a requirement for an IDS?",
                options: [
                    "Increase system overhead",
                    "Must run continually with minimal human supervision",
                    "Require constant restarts",
                    "Ignore system policies"
                ],
                correctAnswer: "b",
                definition: "IDS Requirements – must run continually with minimal human supervision, be fault tolerant, monitor itself for modifications.",
                page: 165,
                chapter: 7,
                explanation: "متطلبات نظام كشف التسلل تشمل التشغيل المستمر بأقل قدر من الإشراف البشري، تحمل الأخطاء، ومراقبة نفسه للكشف عن التعديلات.",
                arabicTranslation: "ما هو أحد متطلبات نظام كشف التسلل؟"
            },
            {
                question: "What is a false positive in intrusion detection?",
                options: [
                    "A missed intrusion",
                    "Legitimate activity incorrectly flagged as an intrusion",
                    "An attack that is blocked",
                    "A system crash"
                ],
                correctAnswer: "b",
                definition: "False Positive – legitimate activity incorrectly flagged as an intrusion.",
                page: 164,
                chapter: 7,
                explanation: "الإيجابية الكاذبة تحدث عندما يتم تصنيف نشاط مشروع بشكل غير صحيح كتسلل بواسطة نظام كشف التسلل، مما قد يسبب إنذارات غير ضرورية.",
                arabicTranslation: "ما هي الإيجابية الكاذبة في كشف التسلل؟"
            },
            {
                question: "What is an example of a hacker behavior?",
                options: [
                    "Optimizing system performance",
                    "Selecting a target based on IP lookup tools",
                    "Encrypting network traffic",
                    "Installing antivirus software"
                ],
                correctAnswer: "b",
                definition: "Hacker Behavior – selecting a target based on IP lookup tools, mapping the network, exploiting vulnerabilities.",
                page: 160,
                chapter: 7,
                explanation: "سلوك الهاكر قد يشمل اختيار الهدف باستخدام أدوات البحث عن IP، رسم خريطة للشبكة، واستغلال الثغرات للوصول غير المصرح به.",
                arabicTranslation: "ما هو مثال على سلوك الهاكر؟"
            }
        ];