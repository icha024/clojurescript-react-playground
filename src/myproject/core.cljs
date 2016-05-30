(ns myproject.core
    (:require [reagent.core :as r :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]))

;; -------------------------
;; Views

(defonce click-count (r/atom 0))

(def sayHello js/hello.)

(defn home-page []
  [:div
    [:h2 "Welcome to Reagent"]
    [:p "Just playin around..."]
    [:input {:type "button" :value "click this" :on-click #(do(swap! click-count inc)(println "button clicked")(sayHello))}]
    [:p "i've been clicked for: " @click-count]
  ]
)

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
