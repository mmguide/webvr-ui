import WebVRManager from "./WebVRManager";
import * as State from "./states";
import { AbstractButton } from "./AbstractButton";
import { EnterVRButton } from "./EnterVRButton";
import { Enter360Button } from "./Enter360Button";
import  "./AframeComponent";

export var webvrui = 
{
    EnterVRButton,
    Enter360Button,
    AbstractButton,
    State,
    WebVRManager
};

window.webvrui = webvrui;