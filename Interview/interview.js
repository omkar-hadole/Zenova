const triggerBtn = document.querySelector(".trigger-btn");
const snackbar = document.querySelector(".snackbar");
const closeBtn = document.querySelector(".close-btn");

let timeoutId;

triggerBtn.addEventListener("click", () => {
  snackbar.classList.add("active");
  startAutoClose();
});

closeBtn.addEventListener("click", () => {
  snackbar.classList.remove("active");
  clearTimeout(timeoutId);
});

function startAutoClose() {
  timeoutId = setTimeout(() => {
    snackbar.classList.remove("active");
  }, 15000);
}

snackbar.addEventListener("mouseenter", () => {
  clearTimeout(timeoutId);
});

snackbar.addEventListener("mouseleave", startAutoClose);

lucide.createIcons();

document.querySelectorAll(".section-header").forEach((header) => {
  header.addEventListener("click", () => {
    const section = header.parentElement;
    document.querySelectorAll(".section").forEach((s) => {
      if (s !== section) s.classList.remove("expanded");
    });
    section.classList.toggle("expanded");
  });
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-item")
      .forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
  });
});

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("active");
  document.querySelector(".overlay").style.display = "block";
});

document.querySelector(".sidebar-close").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("active");
  document.querySelector(".overlay").style.display = "none";
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("active");
  this.style.display = "none";
});

const interviewData = {
  topics: [
    {
      title: "Introduction & Personal Insight",
      subtitle: "Interview • 7 Questions",
      questions: [
        "Can you introduce yourself briefly?",
        "What are your strengths and weaknesses?",
        "What is a non-academic achievement you’re proud of?",
        "Where do you see yourself in 5 years?",
        "What makes you unique compared to other applicants?",
        "How do you contribute to a team or community?",
        `To learn how to introduce yourself in an interview, <a href="https://youtu.be/5v-wyR5emRw?si=h2hjDkwKAiMi2kkf" target="_blank">click here</a>.`,
      ],
    },
    {
      title: "Academic Background & Interests",
      subtitle: "Interview • 9 Questions",
      questions: [
        "Can you walk me through your academic journey so far?",
        "Have you worked on any projects or research related to your field of interest?",
        "Have you taken any online courses or certifications outside of school?",
        "Are you more of a theoretical learner or a practical learner?",
        "How do you balance academic work with extracurricular activities?",
        "Which subject fascinates you the most and why?",
        "Describe a project or research you pursued independently.",
        "What’s a concept you struggled with but eventually mastered?",
        "How have you applied classroom knowledge in real-world scenarios?",
      ],
    },
    {
      title: "Mathematics",
      subtitle: "Interview • 13 Questions",
      questions: [
        "Hey guys, make sure to practice your NSAT exam topics, as 80% of the interview questions are based on Mathematics!",
        "Here are some important topics you should practice:",
        "1. Probability",
        "2. Permutation & Combination",
        "3. Integration",
        "4. Calculus",
        "<span>A science exhibition is being organized, and the organizers plan to set up four different exhibits. They have a collection of ten distinct projects and want to select two projects for display at each exhibit. Each exhibit must have a unique set of projects, meaning no two exhibits can have the same combination of projects. (13 Feb 25)</span><br> How many different ways can the organizers select two projects out of ten for a single exhibit?<br>How many different sets of four unique exhibits can be created where each exhibit has two different projects?",
        "The 10th, 15th, and 25th terms of an arithmetic progression form three consecutive terms of a geometric progression. If the next term of the geometric progression is the ￼th term of the arithmetic progression, what is the value of￼? (14 Feb 25)",
        "One in 100 students says that they like English. A randomly selected student has scored 100%. The probability of scoring 100% is 80% if the student likes English and 30% if the student does not like English. What is the approximate probability that a randomly selected student likes English, given that they scored 100%? Round your answer to two decimal places.(14 Feb 25)",
        "A box with a square base and one open side is made from a rectangular sheet with an area of 108 square units. What is the approximate maximum volume of the box? (14 Feb 25)",
        "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds, respectively. They cross each other in 23 seconds. Find the lengths or speeds of the trains. (14 Feb 25)",
        "A collection consists of 10 non-fiction books and 15 fiction books. Determine the number of comic books if the probability of selecting a fiction book is equal to the product of the probability of selecting a comic book and twice the probability of selecting a non-fiction book. (13 Feb 25)",
        "This type of question is commonly asked in interviews.",
      ],
    },
    {
      title: "Extracurricular & Hobbies",
      subtitle: "Interview • 9 Questions",
      questions: [
        "What extracurricular activities are you involved in?",
        "Have you ever led a team in an event or competition?",
        "Tell me about a hobby or skill you’ve developed over the years.",
        "Have you worked on any non-academic projects?",
        "What are your hobbies and interests?",
        "How do you balance your hobbies with academics?",
        "What hobby or skill have you dedicated the most time to?",
        "Have you worked on any personal projects outside of academics?",
        "What new skill or hobby are you currently learning?",
      ],
    },
  ],
};

const sectionsContainer = document.getElementById("interviewSections");

interviewData.topics.forEach((topic) => {
  const sectionHtml = `
      <div class="section">
        <div class="section-header">

        <div class="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                    <g clip-path="url(#clip0_247_2710)">
                                        <rect width="64" height="64" rx="20" fill="#BFFFE0"></rect>
                                        <rect x="8" y="16" width="48" height="66" rx="8" fill="white"></rect>
                                        <mask id="mask0_247_2710" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-2" y="-13" width="68" height="77">
                                            <rect x="-2" y="-13" width="68" height="76.8" fill="#C4C4C4"></rect>
                                        </mask>
                                        <g mask="url(#mask0_247_2710)">
                                            <path d="M45.2684 20.8494C45.2684 20.8494 49.5743 39.0141 43.0096 54.1435L18.3273 56.1435C17.5037 60.967 7.9508 36.6611 10.2096 22.12L45.2684 20.8494Z" fill="#571E0C"></path>
                                            <path d="M34.2807 47.9548C33.8571 47.9078 33.5042 47.6019 33.4336 47.1784L32.8219 43.7666L26.163 44.9431L26.6571 47.7666C26.7512 48.2372 26.3748 48.6842 25.8806 48.7078L23.7159 48.7548V58.2607H35.9042V48.1195L34.2807 47.9548Z" fill="#FDDECC"></path>
                                            <path d="M33.4112 47.0607C32.1877 47.4372 30.9406 47.696 29.5994 47.8137C28.6112 47.9078 27.67 47.9078 26.7053 47.8372L26.0465 44.096L32.7524 42.9196L33.4112 47.0607Z" fill="#F9C6A9"></path>
                                            <path d="M14.5395 34.2139C14.7043 36.0727 13.316 37.6962 11.4807 37.8374C9.62189 38.0021 7.99838 36.6139 7.8572 34.7786C7.71603 32.9433 9.0807 31.2962 10.916 31.1551C12.7513 30.9904 14.3984 32.3551 14.5395 34.2139Z" fill="#FDDECC"></path>
                                            <path d="M49.8803 31.2266C50.045 33.0855 48.6568 34.709 46.8215 34.8502C44.9627 35.0149 43.3391 33.6266 43.198 31.7913C43.0333 29.9325 44.4215 28.309 46.2568 28.1678C48.0921 28.0031 49.7156 29.3913 49.8803 31.2266Z" fill="#FDDECC"></path>
                                            <path d="M48.0695 30.3089C48.0695 30.3089 48.3754 33.156 45.4342 33.0383L45.0342 32.5678L45.4812 30.0972C45.4812 30.0972 47.1048 31.6031 48.0695 30.3089Z" fill="#F9C6A9"></path>
                                            <path d="M8.82104 34.4265C8.82104 34.4265 8.98576 37.2736 11.8799 36.6854L12.1858 36.1677L11.3387 33.8148C11.3387 33.7677 9.99752 35.5324 8.82104 34.4265Z" fill="#F9C6A9"></path>
                                            <path d="M45.9974 28.9436C46.7503 37.9319 39.4562 45.9083 29.715 46.7319C19.9503 47.5554 11.4327 40.9201 10.6797 31.9319C9.9268 22.9436 15.1739 15.1319 26.9621 14.1436C38.7503 13.1554 45.2444 19.9554 45.9974 28.9436Z" fill="#FDDECC"></path>
                                            <path d="M35.7385 32.1205C35.7856 32.7793 35.315 33.344 34.6562 33.3911C33.9973 33.4382 33.4326 32.9676 33.3856 32.3087C33.3385 31.6499 33.8091 31.0852 34.4679 31.0382C35.1032 30.9911 35.6679 31.4617 35.7385 32.1205Z" fill="#752816"></path>
                                            <path d="M22.2807 33.2493C22.3278 33.9081 21.8572 34.4728 21.1984 34.5199C20.5396 34.5669 19.9749 34.0963 19.9278 33.4375C19.8807 32.7787 20.3513 32.214 21.0102 32.1669C21.6455 32.1199 22.2337 32.614 22.2807 33.2493Z" fill="#752816"></path>
                                            <path d="M24.2328 40.4021L33.4093 39.6962C33.4093 39.6962 28.374 46.2844 24.2328 40.4021Z" fill="#C1545D"></path>
                                            <path d="M29.3398 12.5671C26.9633 12.7083 25.2222 12.9436 22.3045 13.3907C17.5516 14.426 8.37512 18.1436 10.6575 31.0848L10.8692 31.0377C11.4575 35.1789 13.7398 37.673 13.7398 37.673C12.9634 35.3436 12.9869 32.1201 13.1986 29.5789C13.3869 27.3436 14.4222 26.5907 15.8339 24.826C15.7398 26.1671 15.7869 27.226 15.9516 28.5436L19.9986 23.7201C20.7751 22.7554 22.2339 22.6848 23.1045 23.5789C26.5163 27.1083 33.1281 28.0024 40.6104 27.1318C40.6104 27.1318 40.7045 25.273 40.5163 23.3671C41.8339 24.5436 42.4928 25.3671 42.9869 27.3436C43.5986 29.7907 44.0928 32.8024 43.7398 35.1318C43.7398 35.1318 45.5986 32.1201 45.481 27.9318L45.6928 28.1201C45.7634 12.7789 32.6574 12.4024 29.3398 12.5671Z" fill="#F9C6A9"></path>
                                            <path d="M46.093 28.1905L45.8812 28.0023C45.9988 32.2846 44.093 35.367 44.093 35.367C44.4694 32.9905 43.9518 29.9082 43.34 27.414C42.8224 25.3905 41.8341 24.3788 40.493 23.1552L40.54 23.767C40.6577 25.3905 40.5635 26.4964 40.5635 26.4964C32.9165 27.367 26.5636 26.8493 23.0812 23.2258C22.1871 22.3082 20.7047 22.3552 19.9047 23.367L15.693 28.5905C15.5283 27.2493 15.5282 25.8376 15.6224 24.4729C14.94 25.3435 14.3282 26.0258 13.8576 26.7552C13.34 27.5788 12.9635 28.4493 12.8694 29.6729C12.6576 32.2846 12.6341 35.6023 13.4341 37.9552L10.2812 31.2023C9.76355 27.6729 9.81061 24.6846 10.2106 22.1199C10.2106 22.0964 10.2106 22.0964 10.2106 22.0964C11.9753 10.9905 21.1518 8.4964 26.9871 8.04934C30.7518 7.79052 34.54 8.44934 37.7635 10.4023C40.7047 12.1905 43.74 15.2964 45.1988 20.6611C45.7871 22.8023 46.1165 25.2729 46.093 28.1905Z" fill="#571E0C"></path>
                                            <path d="M24.446 37.4379C24.5401 38.4967 22.8225 39.5085 20.6342 39.6967C18.446 39.885 16.5872 39.1791 16.4931 38.1203C16.399 37.0614 18.1166 36.0497 20.3048 35.8614C22.5166 35.6732 24.3519 36.3791 24.446 37.4379Z" fill="#F9C6A9"></path>
                                            <path d="M40.6112 36.0733C40.7053 37.1321 38.9876 38.1439 36.7994 38.3321C34.6112 38.5203 32.7523 37.8145 32.6582 36.7556C32.5641 35.6968 34.2817 34.6851 36.47 34.4968C38.6817 34.3086 40.5171 35.0145 40.6112 36.0733Z" fill="#F9C6A9"></path>
                                            <path d="M13.4111 37.9555L10.2581 31.2026C9.74048 27.6732 9.78754 24.6849 10.1875 22.1202C10.3993 23.7908 11.2699 25.6967 13.8346 26.7555C13.317 27.5791 12.9405 28.4496 12.8464 29.6732C12.6581 32.2849 12.6111 35.5791 13.4111 37.9555Z" fill="#571E0C"></path>
                                            <path d="M46.092 28.1904L45.8802 28.0022C45.9978 32.2845 44.0919 35.3669 44.0919 35.3669C44.4684 32.9904 43.9508 29.9081 43.339 27.414C42.8214 25.3904 41.8331 24.3787 40.4919 23.1551C40.4919 23.1551 43.3625 22.5904 45.1743 20.661C45.7861 22.8022 46.1155 25.2728 46.092 28.1904Z" fill="#571E0C"></path>
                                            <path d="M16.3051 14.4257C16.258 12.8257 14.9639 11.5316 13.3404 11.5316C11.7169 11.5316 10.4227 12.8257 10.3757 14.4257C7.05803 13.9787 5.71685 18.3787 8.61097 19.9316C7.08156 22.9669 10.9639 25.6728 13.3169 23.3669C15.6698 25.6728 19.5757 22.9904 18.0227 19.9316C20.9639 18.3551 19.6227 13.9787 16.3051 14.4257Z" fill="#FAD1E3"></path>
                                            <path d="M8.30444 15.4377C8.49268 15.8142 8.72797 16.1671 9.03385 16.4966C9.9515 17.4142 11.2221 17.7672 12.4221 17.5789C12.4691 16.873 12.2103 16.1672 11.6926 15.6495C10.775 14.6848 9.31621 14.6377 8.30444 15.4377Z" fill="#F6A9CB"></path>
                                            <path d="M12.8221 16.9906C12.9868 17.0142 13.1516 17.0377 13.3398 17.0377C14.728 17.0377 15.8809 15.9083 15.8809 14.4965C15.8809 14.1671 15.8104 13.8612 15.7163 13.5789C14.1398 14.0024 12.9633 15.3436 12.8221 16.9906Z" fill="#F6A9CB"></path>
                                            <path d="M15.4117 17.3677C14.9646 17.3677 14.5411 17.4383 14.1411 17.5794C14.2823 18.85 15.3646 19.8383 16.6587 19.8383C17.4117 19.8383 18.094 19.5089 18.5411 18.9912C17.8587 18.0265 16.7058 17.3677 15.4117 17.3677Z" fill="#F6A9CB"></path>
                                            <path d="M12.8707 21.2267C12.8707 22.2384 13.4825 23.1325 14.3531 23.5325C14.8237 22.8972 15.1296 22.0972 15.1296 21.2267C15.1296 20.3561 14.8472 19.5796 14.3531 18.9208C13.4825 19.3443 12.8707 20.2149 12.8707 21.2267Z" fill="#F6A9CB"></path>
                                            <path d="M8.72998 20.9666C9.12998 21.1078 9.55349 21.1784 10.0006 21.1784C11.2947 21.1784 12.4476 20.5431 13.1535 19.5548C12.6829 19.0372 12.0241 18.7078 11.2712 18.7078C9.95351 18.7078 8.87116 19.696 8.72998 20.9666Z" fill="#F6A9CB"></path>
                                            <path d="M16.3296 18.7091C16.5178 18.7091 16.6826 18.5444 16.6826 18.3561C16.6826 18.1679 16.5178 18.0032 16.3296 18.0032C16.1884 18.0032 16.0708 18.0973 16.0002 18.215L14.0237 18.2385L15.859 17.462C15.9531 17.5561 16.0943 17.5797 16.2355 17.5326C16.4237 17.462 16.4943 17.2502 16.4237 17.0855C16.3531 16.8973 16.1414 16.8267 15.9767 16.8973C15.8355 16.9444 15.7649 17.0855 15.7649 17.2267L13.9531 18.0032L15.3414 16.5914C15.459 16.6385 15.6237 16.615 15.7178 16.5208C15.859 16.3797 15.859 16.1679 15.7178 16.0267C15.5767 15.8855 15.3649 15.8855 15.2237 16.0267C15.1296 16.1208 15.1061 16.2855 15.1531 16.4032L13.7649 17.815L14.5179 15.9797C14.659 15.9797 14.7767 15.8855 14.8473 15.7679C14.9179 15.5797 14.8237 15.3914 14.659 15.3208C14.4708 15.2502 14.2826 15.3444 14.212 15.5091C14.1649 15.6502 14.1884 15.7914 14.2826 15.8855L13.5296 17.7208V15.7444C13.6472 15.6973 13.7414 15.5561 13.7414 15.415C13.7414 15.2267 13.5767 15.062 13.3884 15.062C13.2002 15.062 13.0355 15.2267 13.0355 15.415C13.0355 15.5561 13.1296 15.6738 13.2473 15.7444V17.815L12.3531 15.9326C12.4472 15.8385 12.4708 15.6738 12.4002 15.5561C12.3061 15.3914 12.1178 15.2973 11.9296 15.3914C11.7649 15.4855 11.6708 15.6738 11.7649 15.862C11.8355 16.0032 11.9531 16.0738 12.0943 16.0502L12.9414 17.8385L11.4825 16.4973C11.5296 16.3797 11.4826 16.215 11.3884 16.1208C11.2473 15.9797 11.0355 16.0032 10.8943 16.1444C10.7531 16.2855 10.7766 16.4973 10.9178 16.6385C11.0355 16.7326 11.1767 16.7561 11.2943 16.6855L12.7532 18.0032L10.8943 17.3208C10.8943 17.1797 10.8002 17.062 10.659 17.015C10.4708 16.9444 10.2826 17.0385 10.212 17.2267C10.1414 17.415 10.2355 17.6032 10.4237 17.6738C10.5649 17.7208 10.7061 17.6738 10.8002 17.5797L12.659 18.2385L10.6826 18.3326C10.6355 18.215 10.4943 18.1208 10.3531 18.1444C10.1649 18.1444 10.0002 18.3091 10.0237 18.4973C10.0237 18.6855 10.1884 18.8502 10.3767 18.8267C10.5178 18.8267 10.6355 18.7326 10.6826 18.5914L12.659 18.4973L10.8472 19.3208C10.7531 19.2267 10.5884 19.2032 10.4708 19.2738C10.3061 19.3444 10.212 19.5561 10.3061 19.7444C10.4002 19.9326 10.5884 20.0032 10.7767 19.9091C10.9178 19.8385 10.9884 19.7208 10.9884 19.5797L12.7767 18.7561L11.4355 20.215C11.3178 20.1679 11.1531 20.1914 11.059 20.3091C10.9179 20.4502 10.9414 20.662 11.0825 20.8032C11.2237 20.9444 11.4355 20.9208 11.5767 20.7797C11.6708 20.6855 11.6943 20.5208 11.6473 20.4032L12.9884 18.9679L12.2825 20.8267C12.1414 20.8267 12.0237 20.9208 11.9767 21.062C11.9061 21.2502 12.0002 21.4385 12.1884 21.5091C12.3767 21.5797 12.5649 21.4855 12.6355 21.2973C12.6826 21.1561 12.659 21.015 12.5414 20.9208L13.2473 19.0855L13.2943 21.062C13.1767 21.1091 13.0826 21.2502 13.0826 21.3914C13.0826 21.5797 13.2473 21.7444 13.4355 21.7208C13.6237 21.7208 13.7884 21.5561 13.7649 21.3679C13.7649 21.2267 13.6708 21.1091 13.5531 21.062L13.5061 19.0855L14.3061 20.8973C14.2119 20.9914 14.1884 21.1561 14.2355 21.2738C14.3061 21.4385 14.5178 21.5326 14.7061 21.462C14.8708 21.3914 14.9649 21.1797 14.8943 20.9914C14.8472 20.8502 14.7061 20.7797 14.5649 20.7797L13.7649 18.9679L15.2002 20.3326C15.1531 20.4502 15.1767 20.615 15.2943 20.7091C15.4355 20.8502 15.6473 20.8267 15.7884 20.7091C15.9296 20.5679 15.9061 20.3561 15.7884 20.215C15.6943 20.1208 15.5296 20.0973 15.412 20.1444L14.0002 18.7797L15.8355 19.5091C15.8355 19.6502 15.9296 19.7679 16.0473 19.815C16.2355 19.8855 16.4237 19.7914 16.4943 19.6267C16.5649 19.4385 16.4708 19.2502 16.3061 19.1797C16.1649 19.1326 16.0237 19.1561 15.9296 19.2502L14.0237 18.5444L16.0002 18.5208C16.0708 18.6385 16.1884 18.7091 16.3296 18.7091Z" fill="#FEECEA"></path>
                                            <path d="M13.3396 19.9788C14.2233 19.9788 14.9396 19.2625 14.9396 18.3788C14.9396 17.4952 14.2233 16.7788 13.3396 16.7788C12.456 16.7788 11.7396 17.4952 11.7396 18.3788C11.7396 19.2625 12.456 19.9788 13.3396 19.9788Z" fill="#FBAA19"></path>
                                            <path d="M38.115 48.2135L30.3973 57.8606L22.3738 48.7782L25.8091 48.5429L30.4679 52.8017L34.3738 47.837L38.115 48.2135Z" fill="white"></path>
                                            <path d="M22.3741 48.7079L21.2211 48.7549C17.1505 48.7549 13.4094 50.8961 11.2917 54.3785C6.51527 62.1902 10.962 73.5409 0.750203 75.8938C-0.73215 76.2232 -1.53216 77.8467 -1.06157 79.282L6.5149 102.694C7.1502 104.694 9.45608 105.588 11.2914 104.6C16.2796 101.894 25.2443 95.9173 30.1855 85.9644L20.6094 70.1432L30.3976 57.8608L22.3741 48.7079Z" fill="url(#paint0_linear_247_2710)"></path>
                                            <path d="M68.3996 84.6002C69.882 84.9296 79.7169 80.0265 79.2464 81.4618L71.6699 104.874C71.0111 106.85 68.7287 107.768 66.8699 106.779C61.8817 104.074 52.917 98.0735 47.9993 88.1441C47.8581 92.0029 47.5052 84.4029 51.4346 149.65C51.4346 152.403 36.8228 153.485 25.5522 152.85C25.1993 152.826 24.8464 152.803 24.4934 152.779C17.8817 152.332 12.6816 151.297 12.6816 149.65L16.0699 93.1088C16.6346 83.697 14.5875 92.1676 20.5875 70.1441C32.5875 55.0853 28.7287 59.9323 38.117 48.1912L42.9169 48.8029C43.6934 48.8029 44.4464 48.8735 45.1993 49.0147C45.5758 49.1088 45.9287 49.1794 46.2817 49.297C48.964 50.097 51.317 51.9088 52.8464 54.4029C57.6228 62.1912 58.1878 82.2472 68.3996 84.6002Z" fill="url(#paint1_linear_247_2710)"></path>
                                            <path opacity="0.34" d="M46.3034 49.2722L26.6328 77.6252L25.5975 152.825C25.2446 152.802 24.8916 152.778 24.5387 152.755L25.574 77.2958L25.6917 77.1781L45.2446 49.0134C45.5975 49.084 45.9269 49.1781 46.3034 49.2722Z" fill="#F6A9CB"></path>
                                            <path d="M40.2331 48.4491L38.139 48.1667L20.6096 70.1432H23.0331L40.2331 48.4491Z" fill="#F6A9CB"></path>
                                            <path opacity="0.32" d="M16.5398 71.3197C16.5398 71.3197 18.7751 63.7197 19.1045 62.1432C19.1045 62.1432 20.9633 67.5314 25.7163 69.4844L16.5398 71.3197Z" fill="#D08582"></path>
                                            <path opacity="0.32" d="M47.7642 71.3192C47.7642 71.3192 46.5172 63.4839 46.2113 61.9075C46.2113 61.9075 43.3642 67.531 38.5878 69.4604L47.7642 71.3192Z" fill="#D08582"></path>
                                            <path d="M30.4689 52.8017L28.3983 55.6017L27.5277 54.5899L29.5983 52.0017L30.4689 52.8017Z" fill="#E6E7E8"></path>
                                            <path d="M29.1993 59.3667L30.3993 57.8608L22.3758 48.7079L21.2229 48.7549C20.8934 48.7549 20.564 48.802 20.2346 48.8255L29.1993 59.3667Z" fill="#F6A9CB"></path>
                                        </g>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_247_2710" x1="7.56826" y1="55.1161" x2="7.56826" y2="80.3274" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#71E9AF"></stop>
                                            <stop offset="0.9845" stop-color="#71E9AF"></stop>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_247_2710" x1="46.0421" y1="53.0366" x2="46.0421" y2="98.0458" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#71E9AF"></stop>
                                            <stop offset="0.9845" stop-color="#2BFF98"></stop>
                                        </linearGradient>
                                        <clipPath id="clip0_247_2710">
                                            <rect width="64" height="64" rx="20" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
            <div class="section-info">
              <h3>${topic.title}</h3>
              <p>${topic.subtitle}</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" class="lucide lucide-chevron-down chevron"><path d="m6 9 6 6 6-6"></path></svg>
        </div>
        </div>
        <div class="section-content">
          <ul class="questions-list">
            ${topic.questions
              .map(
                (question) => `
              <li class="question-item">
                <span class="question-number">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#925FE2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span class="question-text">${question}</span>
              </li>`
              )
              .join("")}
          </ul>
        </div>
      </div>`;
  sectionsContainer.insertAdjacentHTML("beforeend", sectionHtml);
});

document.querySelectorAll(".section-header").forEach((header) => {
  header.addEventListener("click", () => {
    const section = header.parentElement;
    document.querySelectorAll(".section").forEach((s) => {
      if (s !== section) s.classList.remove("expanded");
    });
    section.classList.toggle("expanded");
  });
});
