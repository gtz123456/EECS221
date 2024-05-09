(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{303:function(e,t,i){"use strict";i.r(t);var a=i(14),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"eecs-221-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eecs-221-project"}},[e._v("#")]),e._v(" EECS 221 Project")]),e._v(" "),t("h2",{attrs:{id:"team-members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#team-members"}},[e._v("#")]),e._v(" Team members")]),e._v(" "),t("p",[t("strong",[e._v("Group 4 Members:")]),e._v(" Mengting Yang, Tianzhou Gao, Xuzhong Chen, Ang Li")]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("In the evolving landscape of mixed reality (MR), ensuring user security and ease of access remains a significant challenge. Traditional authentication methods, like usernames and passwords, are cumbersome and less secure when applied to MR environments such as those encountered with Microsoft HoloLens. Furthermore, the HoloLens design does not support user-facing cameras, rendering facial recognition technologies infeasible for user identification. This limitation necessitates an innovative approach to authenticate users efficiently without compromising their privacy.\nMoreover, the standard practice of processing data on external devices introduces additional vulnerabilities, exposing users to potential security breaches. Our goal is to revolutionize user identification by developing a seamless, real-time authentication process that operates entirely on-device, eliminating the need for external data transmission and reducing the risk of privacy violations.\nExplore our solution to navigate the intersection of security and functionality, ensuring a secure and user-friendly experience in mixed reality environments.")]),e._v(" "),t("h2",{attrs:{id:"problem-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem-definition"}},[e._v("#")]),e._v(" Problem Definition")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Inefficient Login Mechanisms:")]),e._v(" Traditional login systems like usernames and passwords are impractical and insecure for mixed reality platforms.")]),e._v(" "),t("li",[t("strong",[e._v("Biometric Authentication Limitations:")]),e._v(" The design constraints of the HoloLens, which lack forward-facing cameras, rule out facial recognition for verifying user identity.")]),e._v(" "),t("li",[t("strong",[e._v("Vulnerability to Data Theft:")]),e._v(" Sending data to external systems for processing exposes users to increased risks of unauthorized access and data theft.")]),e._v(" "),t("li",[t("strong",[e._v("Integration Challenges:")]),e._v(" There is an essential need for an authentication system that integrates directly with the device, operates in real time, and maintains user privacy without external data transfers.")])]),e._v(" "),t("h2",{attrs:{id:"challenges-and-approaches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenges-and-approaches"}},[e._v("#")]),e._v(" Challenges and Approaches")]),e._v(" "),t("h3",{attrs:{id:"challenges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[e._v("#")]),e._v(" Challenges")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Resource Limitations:")]),e._v(" The HoloLens is a resource-constrained device, making it challenging to run complex machine learning models for real-time authentication.")]),e._v(" "),t("li",[t("strong",[e._v("Privacy Concerns:")]),e._v(" Ensuring that user data remains private and is not exposed during the authentication process requires innovative solutions that avoid external data transmissions.")]),e._v(" "),t("li",[t("strong",[e._v("Usability:")]),e._v(" Maintaining a seamless and user-friendly authentication experience in a mixed reality environment without interrupting user interaction.")]),e._v(" "),t("li",[t("strong",[e._v("Accuracy:")]),e._v(" Developing a reliable authentication system that accurately identifies users based on limited and non-traditional biometric data like hand gestures and eye movements.")])]),e._v(" "),t("h3",{attrs:{id:"approaches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#approaches"}},[e._v("#")]),e._v(" Approaches")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Efficient Machine Learning Models:")]),e._v(" Exploring and implementing lightweight machine learning algorithms such as Random Forest, KNN, SVM, and XGBoost that can operate effectively on the HoloLens.")]),e._v(" "),t("li",[t("strong",[e._v("On-device Processing:")]),e._v(" All authentication processes are conducted locally on the HoloLens to avoid the need for external data transfers, enhancing privacy and security.")]),e._v(" "),t("li",[t("strong",[e._v("Background Authentication:")]),e._v(" Utilizing sensors to collect data unobtrusively in the background during regular user interactions with the MR environment, ensuring the authentication process is non-invasive.")]),e._v(" "),t("li",[t("strong",[e._v("Data Optimization:")]),e._v(" Adjusting the sample rates and data collection methods to balance between authentication accuracy and system performance, minimizing the impact on device resources and user experience.")])]),e._v(" "),t("h2",{attrs:{id:"timeline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timeline"}},[e._v("#")]),e._v(" Timeline:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Week")]),e._v(" "),t("th",[e._v("Activity")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Week 6")]),e._v(" "),t("td",[e._v("Completion of Unity game design and commencement of data collection, followed by the midterm presentation.")])]),e._v(" "),t("tr",[t("td",[e._v("Week 7")]),e._v(" "),t("td",[e._v("Continued data collection and analysis. Focus on machine learning model training and iterative optimization based on evaluation results.")])]),e._v(" "),t("tr",[t("td",[e._v("Week 8")]),e._v(" "),t("td",[e._v("Comparative performance analysis of different machine learning algorithms to select the optimal one for deployment.")])]),e._v(" "),t("tr",[t("td",[e._v("Week 9")]),e._v(" "),t("td",[e._v("Deployment of the selected machine learning model on HoloLens for real-time analysis.")])]),e._v(" "),t("tr",[t("td",[e._v("Week 10")]),e._v(" "),t("td",[e._v("Comprehensive system testing, debugging, and revision of designs as needed to refine the application.")])]),e._v(" "),t("tr",[t("td",[e._v("Final Week")]),e._v(" "),t("td",[e._v("Final presentation and submission, wrapping up the project documentation and outcomes.")])])])]),e._v(" "),t("h2",{attrs:{id:"preliminary-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preliminary-design"}},[e._v("#")]),e._v(" Preliminary Design")]),e._v(" "),t("p",[e._v("The preliminary design of our project encompasses a comprehensive setup of hardware and software components, specifically tailored to enhance user authentication in mixed reality environments using the Microsoft HoloLens 2. Below is a detailed breakdown of the systems and methodologies involved:")]),e._v(" "),t("h3",{attrs:{id:"hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Microsoft HoloLens 2")]),e._v(": Chosen for its advanced mixed reality capabilities and sensor array. This headset is integral to our solution, providing the necessary hardware platform for deploying our authentication algorithms.")])]),e._v(" "),t("h3",{attrs:{id:"software-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-components"}},[e._v("#")]),e._v(" Software Components")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Unity Engine")]),e._v(": Employed to create a dynamic and interactive mixed reality environment where users can engage with virtual objects. Unity is pivotal for simulating real-world scenarios in which user identification needs to be tested and validated. Below is a demo video showing how our Unity game works:\n"),t("a",{attrs:{href:"https://www.youtube.com/watch?v=2dj5jzh1z3Y",title:"Unity game",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://res.cloudinary.com/marcomontalbano/image/upload/v1715239779/video_to_markdown/images/youtube--2dj5jzh1z3Y-c05b58ac6eb4c4700831b2b3070cd403.jpg",alt:"Unity game"}}),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("Microsoft Mixed Reality Toolkit (MRTK)")]),e._v(": A collection of scripts and components intended to accelerate the development of mixed reality applications. MRTK is utilized to streamline interactions and simplify the usage of device features like spatial awareness and hand tracking.")]),e._v(" "),t("li",[t("strong",[e._v("HoloLens 2 Sensor Streaming (hl2ss)")]),e._v(": This component is crucial for accessing real-time sensor data from the HoloLens 2. It enables the capture of detailed biometric data, which is essential for our machine learning models to perform user identification. The example data is shown in the picture below:")])]),e._v(" "),t("p",[t("img",{attrs:{src:"format.png",alt:"data_format",title:"Data format"}})]),e._v(" "),t("h3",{attrs:{id:"machine-learning-libraries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#machine-learning-libraries"}},[e._v("#")]),e._v(" Machine Learning Libraries")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("XGBoost")]),e._v(": Selected for its performance in classification problems, particularly under constraints of computational resources, which is a common challenge in wearable technology.")]),e._v(" "),t("li",[t("strong",[e._v("SVM (Support Vector Machine)")]),e._v(": Used for its effectiveness in high-dimensional spaces, which is typical for sensor data from HoloLens 2.")]),e._v(" "),t("li",[t("strong",[e._v("Random Forest")]),e._v(": Chosen for its robustness in handling various types of data and its ability to run efficiently on limited datasets.")]),e._v(" "),t("li",[t("strong",[e._v("KNN (K-Nearest Neighbors)")]),e._v(": Utilized for its simplicity and effectiveness in classification by comparing new data points with known data points.")])]),e._v(" "),t("h3",{attrs:{id:"unity-game-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unity-game-design"}},[e._v("#")]),e._v(" Unity Game Design")]),e._v(" "),t("p",[e._v("A simple Unity MR game is designed for simulating user activity in general MR applications. A demo video is presented below:")]),e._v(" "),t("h3",{attrs:{id:"data-collection-strategy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-collection-strategy"}},[e._v("#")]),e._v(" Data Collection Strategy")]),e._v(" "),t("p",[e._v("During interactions within the Unity-developed MR environment, data is captured passively from the user, focusing on non-intrusive metrics to ensure comfort and natural behavior:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Hand Joint Data")]),e._v(": Tracks the position and orientation of each joint in the user’s hands, providing a detailed profile of hand movements.")]),e._v(" "),t("li",[t("strong",[e._v("Eye Gaze Data")]),e._v(": Monitors where the user is looking within the virtual environment, offering insights into user focus and intent.")]),e._v(" "),t("li",[t("strong",[e._v("Hand Pose Data")]),e._v(": Collects comprehensive data on the positioning and movement of the user’s hands, which is pivotal for gestures recognition.")])]),e._v(" "),t("h3",{attrs:{id:"data-storage-and-processing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-storage-and-processing"}},[e._v("#")]),e._v(" Data Storage and Processing")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("CSV Files")]),e._v(": Sensor data, including positions and orientations, is logged into CSV files. This format facilitates easy manipulation and analysis, serving as the foundational dataset for training our machine learning models.")]),e._v(" "),t("li",[t("strong",[e._v("Local Processing")]),e._v(": All data is processed on the device to ensure privacy and security, aligning with our goal to create a self-contained system that does not rely on external data processing.")])]),e._v(" "),t("p",[e._v("This preliminary design is aimed at establishing a robust foundation for developing a secure and efficient user authentication system within mixed reality applications, addressing both technical and user-experience challenges.")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References:")]),e._v(" "),t("h3",{attrs:{id:"articles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#articles"}},[e._v("#")]),e._v(" Articles")]),e._v(" "),t("ol",[t("li",[e._v("Cong Shi, Xiangyu Xu, Tianfang Zhang, Payton Walker, Yi Wu, Jian Liu, Nitesh Saxena, Yingying Chen, and Jiadi Yu. 2021. Face-Mic: inferring live speech and speaker identity via subtle facial dynamics captured by AR/VR motion sensors. In Proceedings of the 27th Annual International Conference on Mobile Computing and Networking (MobiCom '21). Association for Computing Machinery, New York, NY, USA, 478–490. https://doi.org/10.1145/3447993.3483272")]),e._v(" "),t("li",[e._v("Jarin, I., Duan, Y., Trimananda, R., Cui, H., Elmalaki, S., & Markopoulou, A. (2023). BehaVR: User Identification Based on VR Sensor Data. arXiv preprint arXiv:2308.07304.")]),e._v(" "),t("li",[e._v("Miller, M. R., Herrera, F., Jun, H., Landay, J. A., & Bailenson, J. N. (2020). Personal identifiability of user tracking data during observation of 360-degree VR video. Scientific Reports, 10(1), 17404.")]),e._v(" "),t("li",[e._v("Vijayan, V.; Connolly, J.P.; Condell, J.; McKelvey, N.; Gardiner, P. Review of Wearable Devices and Data Collection Considerations for Connected Health. Sensors 2021, 21, 5589. https://doi.org/10.3390/s21165589")])]),e._v(" "),t("h3",{attrs:{id:"sdk-and-libraries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sdk-and-libraries"}},[e._v("#")]),e._v(" SDK and Libraries")]),e._v(" "),t("ol",[t("li",[e._v("Windows Runtime API: JointPose Struct https://learn.microsoft.com/en-us/uwp/api/windows.perception.people.jointpose?view=winrt-22621")]),e._v(" "),t("li",[e._v("MRTK: Extended eye tracking in native engine https://learn.microsoft.com/en-us/uwp/api/windows.perception.people.jointpose?view=winrt-22621")]),e._v(" "),t("li",[e._v("hl2ss: https://github.com/jdibenes/hl2ss")])])])}),[],!1,null,null,null);t.default=n.exports}}]);