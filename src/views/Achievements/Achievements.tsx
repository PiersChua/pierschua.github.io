import "./Achievements.css";
import AchievementsItem from "./AchievementsItem";
import AchievementModal from "./AchievementModal";
import { Achievement } from "../../types/achievement";
import { achievements } from "../../data/achievements";
import { useState, useEffect } from "react";

const Achievements = () => {
  const sortedAchievements = achievements.sort((a, b) => {
    return b.id - a.id;
  });
  const [modalVisible, setModalVisible] = useState(false);
  // account for null achievements
  const [modalAchievement, setModalAchievement] =
    useState<Achievement | null>();
  const handleModalVisible = (id: number) => {
    // find the first element that corresponds to the same id
    setModalAchievement(achievements.find((data) => data.id == id) || null);
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  // const preloadImages = (images: string[]) => {
  //   images.forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // };

  // useEffect(() => {
  //   const allImages = sortedAchievements.flatMap(
  //     (achievement) => achievement.modalImage
  //   );
  //   preloadImages(allImages);
  // }, []);

  return (
    <div>
      <AchievementModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        achievement={modalAchievement || null}
      ></AchievementModal>
      <div className="achievements" id="achievements">
        <h1 className="title">My achievements</h1>
        <div className="achievements-container">
          {sortedAchievements.map((data) => (
            <AchievementsItem
              key={data.id}
              achievement={data}
              onSetModalVisible={handleModalVisible}
            ></AchievementsItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
