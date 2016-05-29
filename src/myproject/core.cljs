(ns myproject.core
    (:require [reagent.core :as r :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]))

;; -------------------------
;; Views

(defonce click-count (r/atom 0))

(defn home-page []
  [:div
    [:h2 "Welcome to Reagent"]
    [:p "Just playin around..."]
    [:input {:type "button" :value "click this" :on-click #(swap! click-count inc)}]
    [:p "i've been clicked for: " @click-count]
  ]
)

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
