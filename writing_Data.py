#! /usr/bin/python3

import paho.mqtt.client as mqtt
import os
import xml.etree.cElementTree as et
import time

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    # Subscribing in on_connect() - if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("chambre/humidity")
    client.subscribe("chambre/temperature")
    client.subscribe("chambre/light_color")

    client.subscribe("sdb/waterlevel")
    client.subscribe("sdb/humidity")

    client.subscribe("salon/light")
    client.subscribe("salon/window")
    client.subscribe("salon/rain")

    client.subscribe("garage/voiture")
    client.subscribe("garage/citerne")
    client.subscribe("garage/bigdoor")

    client.subscribe("hall/courrier")
    client.subscribe("hall/personnes")
    client.subscribe("hall/jardin")

    client.subscribe("cuisine/people")
    client.subscribe("cuisine/temperature")
    client.subscribe("cuisine/refTemp")
    client.subscribe("cuisine/window")

    # client.subscribe("room/device") Exemple


def on_message(client, userdata, msg):
    print("Message recu "+msg.topic+" "+str(msg.payload))

    base_path = os.path.dirname(os.path.realpath(__file__))
    # print(base_path)

    xml_file = os.path.join(base_path, "sensordata.xml")

    tree = et.parse(xml_file)
    root = tree.getroot()
    if msg.topic == "chambre/humidity":
        print("Humidite de la chambre")

        for child in root.iter('sensors'):
            for sec in child.iter('chambre'):
                for humidity in sec.iter('humidity'):
                        new_humidity = str(msg.payload)
                        humidity.text = new_humidity

            # print("On ecrit dans le fichier")
    # tree.write(xml_file)
    #
    # print("Nouveau fichier xml")
    # for child in root:
    #     for sec in child.iter('chambre'):
    #     # print(sec.tag, sec.attrib)
    #         for element in sec.iter('resistance'):
    #             print("Dans le nouveau fichier xml "+ element.tag + " : "+ " : "+ element.text)

    if msg.topic == "chambre/temperature":
        print("Temperature de la chambre")

        for child in root.iter('sensors'):
            for sec in child.iter('chambre'):
                for temperature in sec.iter('temperature'):
                    new_tmp = str(msg.payload)
                    temperature.text = new_tmp

    if msg.topic == "chambre/light_color":
        print("Couleur des LED allumees de la chambre")

        for child in root.iter('sensors'):
            for sec in child.iter('chambre'):
                for bright in sec.iter('extBrightness'):
                    new_LED = str(msg.payload)
                    if new_LED == "1":
                        new_color = "jaune"
                        bright.text = new_color

                    if new_LED == "2":
                        new_color = "bleu"
                        bright.text = new_color

                    if new_LED == "3":
                        new_color = "rouge"
                        bright.text = new_color



    if msg.topic == "sdb/waterlevel":
        print("Dans le potentiometre dans le sujet sdb")

        for child in root.iter('sensors'):
            for sec in child.iter('sdb'):
                for waterlvl in sec.iter('floodDetection'):
                    new_water = str(msg.payload)
                    waterlvl.text = new_water
                    # print("On ecrit dans le fichier")

        # tree.write(xml_file)
        # print("Nouveau fichier xml")
        #
        # for child in root.iter('sensors'):
        #     for sec in child.iter('sdb'):
        #         for element in sec.iter('floodDetection'):
        #             print("Dans le nouveau fichier xml " + element.tag + " : " + " : " + element.text)

    if msg.topic == "sdb/humidity":
        print("Dans l'humidite dans le sujet sdb")

        for child in root.iter('sensors'):
            for sec in child.iter('sdb'):
                for humidite in sec.iter('humidity'):
                    new_hum = str(msg.payload)
                    humidite.text = new_hum
                    # print("On ecrit dans le fichier")

        # tree.write(xml_file)
        # print("Nouveau fichier xml")
        #
        # for child in root.iter('sensors'):
        #     for sec in child.iter('sdb'):
        #         for element in sec.iter('humidity'):
        #             print("Dans le nouveau fichier xml " + element.tag + " : " + " : " + element.text)

    if msg.topic == "salon/light":
        print("Lumieres du salon allumees")

        for child in root.iter('sensors'):
            for sec in child.iter('salon'):
                for lights in sec.iter('extBrightness'):
                    new_light = str(msg.payload)
                    lights.text = new_light
                    # print("On ecrit dans le fichier")

        # tree.write(xml_file)
        # print("Nouveau fichier xml")
        #
        # for child in root.iter('sensors'):
        #     for sec in child.iter('salon'):
        #         for element in sec.iter('extBrightness'):
        #             print("Dans le nouveau fichier xml " + element.tag + " : " + " : " + element.text)


    if msg.topic == "salon/window":
        print("Fenetres du salon ouvertes ")

        for child in root.iter('sensors'):
            for sec in child.iter('salon'):
                for wind in sec.iter('opencloseWindow'):
                    new_state = str(msg.payload)
                    wind.text = new_state
                    # print("On ecrit dans le fichier")

        # tree.write(xml_file)
        # print("Nouveau fichier xml")
        #
        # for child in root.iter('sensors'):
        #     for sec in child.iter('salon'):
        #         for element in sec.iter('opencloseWindow'):
        #             print("Dans le nouveau fichier xml " + element.tag + " : " + " : " + element.text)


    if msg.topic == "salon/rain":
        print("Detecter de l'eau ")

        for child in root.iter('sensors'):
            for sec in child.iter('salon'):
                for pluie in sec.iter('rainDetect'):
                    new_pluie = str(msg.payload)
                    pluie.text = new_pluie
                    # print("On ecrit dans le fichier")

        # tree.write(xml_file)
        # print("Nouveau fichier xml")
        #
        # for child in root.iter('sensors'):
        #     for sec in child.iter('salon'):
        #         for element in sec.iter('rainDetect'):
        #             print("Dans le nouveau fichier xml " + element.tag + " : " + " : " + element.text)

    if msg.topic == "garage/voiture":
        print("La voiture est la ")

        for child in root.iter('sensors'):
            for sec in child.iter('garage'):
                for car in sec.iter('carDistance'):
                    new_car = str(msg.payload)
                    car.text = new_car

    if msg.topic == "garage/citerne":
        print("Detecter de l'eau dans la citerne ")

        for child in root.iter('sensors'):
            for sec in child.iter('garage'):
                for citerne in sec.iter('tank'):
                    new_citerne = str(msg.payload)
                    citerne.text = new_citerne

    if msg.topic == "garage/bigdoor":
        print("Porte de garage ouverte ")

        for child in root.iter('sensors'):
            for sec in child.iter('garage'):
                for bigdoor in sec.iter('openclosedoor'):
                    new_bigdoor = str(msg.payload)
                    bigdoor.text = new_bigdoor

    if msg.topic == "hall/courrier":
        print("Il y a du courrier ")

        for child in root.iter('sensors'):
            for sec in child.iter('hall'):
                for mail in sec.iter('mail'):
                    new_mail = str(msg.payload)
                    mail.text = new_mail

    if msg.topic == "hall/personnes":
        print("Il y a autant de personnes ")

        for child in root.iter('sensors'):
            for sec in child.iter('hall'):
                for people in sec.iter('peopleInHall'):
                    new_people = str(msg.payload)
                    people.text = new_people

    if msg.topic == "hall/jardin":
        print("Porte de jardin ouverte ")

        for child in root.iter('sensors'):
            for sec in child.iter('hall'):
                for gardendoor in sec.iter('openclosedoor'):
                    new_gardendoor = str(msg.payload)
                    gardendoor.text = new_gardendoor

    if msg.topic == "cuisine/people":
        print("Quelqu'un est dans la cuisine ")

        for child in root.iter('sensors'):
            for sec in child.iter('cuisine'):
                for person in sec.iter('presenceDetection'):
                    new_person = str(msg.payload)
                    person.text = new_person

    if msg.topic == "cuisine/temperature":
        print("Temperature dans la cuisine ")

        for child in root.iter('sensors'):
            for sec in child.iter('cuisine'):
                for temperature in sec.iter('temperature'):
                    new_temp = str(msg.payload)
                    temperature.text = new_temp

    if msg.topic == "cuisine/refTemp":
        print("Temperature de reference ")

        for child in root.iter('sensors'):
            for sec in child.iter('cuisine'):
                for reference in sec.iter('tempSeuil'):
                    new_ref = str(msg.payload)
                    reference.text = new_ref

    if msg.topic == "cuisine/window":
        print("Fenetre de la cuisine ouverte ")

        for child in root.iter('sensors'):
            for sec in child.iter('cuisine'):
                for wind in sec.iter('opencloseWindow'):
                    new_wind = str(msg.payload)
                    wind.text = new_wind

    tree.write(xml_file)
    print("Nouveau fichier xml")

client = mqtt.Client()
print("Hello")
client.on_connect = on_connect
client.on_message = on_message

client.connect("192.168.4.1", 1883, 60)
# Process network traffic and dispatch callbacks. This will also handle
# reconnecting. Check the documentation at
# https://github.com/eclipse/paho.mqtt.python
# for information on how to use other loop*() functions
time.sleep(2)
client.loop_forever()