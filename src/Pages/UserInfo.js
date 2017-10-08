import React, { Component } from 'react';
 
import {
    ListView,
    Platform,
    Slider,
    StyleSheet,
    TouchableWithoutFeedback,
    View, 
    Text, 
    Image, 
    Linking,
    Modal,
    ScrollView
  } from 'react-native';
import { connect } from 'react-redux';


import CardSection from './../components/CardSection/index';
import CardSectionInput from './../components/CardSectionInput/index';
import Card from './../components/Card/index';
import Input from './../components/Input/index';
import Button from './../components/Button/index';
import Header from './../components/Header';
//import { emailChanged, passwordChanged, loginUser } from '../actions';
import Spinner from './../components/Spinner/index';
import { StackNavigator } from 'react-navigation';

import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';


import * as Data from '../actions';
import Picker from 'react-native-picker';

import { bindActionCreators } from 'redux';

import Routes from './../config/routes';

//import codePush from "react-native-code-push";
import { AppNavigator } from './../config/routes';
import { NavigationActions } from 'react-navigation';
import Tabs from 'react-native-tabs';
import BottomTab from './bottomTab';

let likes = 300;
let comments = 200;
let messages = 100;
let score = 60;
let averageLikes = 200;
let averageComments = 400;
let averageMessages = 40;

let questionsText = "This data was obtained from the following journal: ";
let urlJournal = "https://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-017-0110-z";

var progress = score/100;
var newProgress = progress;
console.log("ProgressNew", seconds);
for (i = 0; i < seconds; i++) { 
    var seconds = new Date().getTime() / 1000;
    newProgress = i;
    
}

const ANIMATION_TYPES = {
    'Fading Entrances': [
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInUp',
      'fadeInUpBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
    ],
  };
  
var delaySeconds = 800;

class UserInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            page:'second',
            modalLikes: false,
            modalComments: false,
            modalMessages: false,
            progress: 0,
            indeterminate: true,
            modalQuestions: false,

        };
      }
      componentDidMount() {
        this.animate();
      }

    
      setModalVisible(modal, visible) {
        console.log("Modal VIsible", modal)
          if (modal == "likes") {
            console.log("Modal VIsible for likes", visible)
            this.setState({modalLikes: visible});
          }
          else if (modal == "comments") {
            console.log("Modal VIsible for comments", visible)
            this.setState({modalComments: visible});
          }
          else if (modal == "messages") {
            console.log("Modal VIsible for messages", visible)
            this.setState({modalMessages: visible});
        }
        else if (modal == "questions") {
            console.log("Modal VIsible for Questions", visible)
            this.setState({modalQuestions: visible});
        }
        
      }

      animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
          this.setState({ indeterminate: false });
          setInterval(() => {
            progress += Math.random() / 3;
            if (progress > score/100) {
              progress = score/100;
            }
            this.setState({ progress });
          }, 500);
        }, 0);
      }

    render() {

        
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'lightblue'}} >
                <View style={styles.progressView}>
                <Text style={styles.usernameText}> FatOldGuy </Text>
                <Progress.Pie 
                progress={this.state.progress}
                indeterminate={this.state.indeterminate} 
                size={200} />
               <Text style={{ paddingBottom: 50 }}> Your score = {newProgress}</Text>
                </View>
                
                  
                        {/* <Text style={styles.text}>  </Text> */}
                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds}
                            onPress={() => this.setModalVisible("likes",!this.state.modalLikes)}
                        >
                        Your Number of Likes: {likes}
                        </Animatable.Text>

                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={likes/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={averageLikes/1000} width={200} />
                        </Animatable.View>

                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+200}
                            onPress={() => this.setModalVisible("comments",!this.state.modalcomments)}
                        >
                        Your Number of Comments: {comments}
                        </Animatable.Text>


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+200}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={comments/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={averageComments/1000} width={200} />
                        </Animatable.View>



                        <Animatable.Text 
                            animation="bounceIn" 
                            style={styles.text}
                            delay={delaySeconds+400}
                            onPress={() => this.setModalVisible("messages",!this.state.modalmessages)}
                        >
                        Your Number of Messages: {messages}
                        </Animatable.Text>


                        <Animatable.View
                            animation="bounceIn" 
                            style={styles.graph}
                            delay={delaySeconds+200}
                            > 
                        <Text style={styles.textBar}> Yours </Text>
                        <Progress.Bar progress={messages/1000} width={200} color={"red"} />
                        <Text style={styles.textBar}> Average </Text>
                        <Progress.Bar progress={averageMessages/1000} width={200} />
                        </Animatable.View>


                    
                        <Text style={styles.questions} onPress={() }> Questions?  </Text>
                {/* <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
                selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
                    <Text name="first">Your Info</Text>
                    <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Resources</Text>
                    <Text name="third">Info</Text>
                    
                </Tabs> */}
                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible("likes",false)}
                        >
                       
                     
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalLikes}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("likes",false)}
                        > Likes The researchers also discovered that the more comments a post received, the more likely it was posted by a depressed participant. On the other hand, a higher number of likes signified it was posted by someone who wasn't depressed. </Text>
                    </View>
                    </Modal>
                </View>
                </Animatable.View>

            {/* Comments */}

                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible(!this.state.modalComments)}
                        >
                       
                     
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalComments}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("comments",false)}
                        > COmmens The researchers also discovered that the more comments a post received, the more likely it was posted by a depressed participant. On the other hand, a higher number of likes signified it was posted by someone who wasn't depressed. </Text>
                    </View>
                    </Modal>
                </View>
                </Animatable.View>
                
                
                 {/* Messages */}
                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible(!this.state.modalMessages)}
                        >
                       
                
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalMessages}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("messages",false)}
                        > Messages The researchers also discovered that the more comments a post received, the more likely it was posted by a depressed participant. On the other hand, a higher number of likes signified it was posted by someone who wasn't depressed. </Text>
                    </View>
                    </Modal>
                </View>
                </Animatable.View>
            {/* Questions */}
                <Animatable.View 
                            animation="bounceIn" 
                            //style={styles.text}
                            delay={1000}
                            onPress={() => this.setModalVisible(!this.state.modalComments)}
                        >
                       
                     
                <View style={styles.modal}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalComments}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        
                        
                    >
                    <View style={styles.textViewModal}>
                        <Text
                        onPress={() => this.setModalVisible("questions",!this.state.modalLikes)}
                        > {questionsText} </Text> 
                        <Text onPress={() => Linking.openURL(urlJournal)}>
                        Here </Text>
                        
                    </View>
                    </Modal>
                </View>
                </Animatable.View>
                

                
            </ScrollView>
        );
    }
}
const styles = {
    input: { 
         backgroundColor: 'white', 
         borderRadius: 5, 
         borderWidth: 1, 
         alignContent: 'center', 
         padding: 20,
         margin: 10,
         flex: 1,
         //color: 'white',
         
         },
    buttonStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        width: 100,
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'column',
        marginBottom: 90,
        textAlign: 'center',
        flexDirection: 'row',


        //height: 20,
    },
    progressView: {
        flexDirection: 'column',
        alignContent: 'center',
        alignSelf: 'center',
        paddingTop: 30,
        backgroundColor: 'transparent',

    },
    textData: {
        paddingTop: 20,
        //color: 'blue',
        flexDirection: 'column'
    },
    text: {
        fontSize: 20,
        backgroundColor: '#A9C7BE',
        width: 400,
        padding: 10,
        marginTop: 10,
    },
    usernameText: {
        fontSize: 29,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 10,

    },
    modal: {
        marginTop: 20,
        height: 100,
        backgroundColor: 'transparent',
    },
    textViewModal: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 300,
        padding: 30,
    },
    graph: {
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 5,
    },
    textBar: {
        fontSize: 18,
    }
}

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    ...Data
  },
  dispatch
);

const mapStateToProps = (state) => {
    
    return {
        
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(UserInfo);
//export default LoginRedux;