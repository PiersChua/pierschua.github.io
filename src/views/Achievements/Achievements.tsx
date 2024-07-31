import "./Achievements.css";
import AchievementsItem from "./AchievementsItem";
import AchievementModal from "./AchievementModal";
import { Achievement } from "../../types/achievement";
import { achievements } from "../../data/achievements";
import { useState } from "react";

const Achievements = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // account for null achievements
  const [modalAchievement, setModalAchievement] =
    useState<Achievement | null>();
  const handleModalVisible = (id: number) => {
    setModalVisible(!modalVisible);
    // find the first element that corresponds to the same id
    setModalAchievement(achievements.find((data) => data.id == id) || null);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <AchievementModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        achievement={modalAchievement || null}
      ></AchievementModal>
      <div className="achievements" id="achievements">
        <h1 className="title">My trophies</h1>
        <div className="achievements-container">
          {achievements.map((data) => (
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
